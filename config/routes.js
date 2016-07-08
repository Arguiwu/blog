var Index = require('../app/controllers/index');
var Article = require('../app/controllers/article');
var Category = require('../app/controllers/category');
var Archive = require('../app/controllers/archive');
var User = require('../app/controllers/user');
var Tag = require('../app/controllers/tag');
var jsSHA = require('jssha');
var xml=require('node-xml');
module.exports = function(app){
	//首页
	app.get('/',Index.index);
	//文章详情
	app.get('/article/*/:id',Article.detail);
	//分类
	app.get('/category',Category.list);
	//档案
	app.get('/archive',Archive.list);
	//标签
	app.get('/tag',Tag.list);
	//后台登录
	app.get('/admin/login',function(req,res){
		res.render('login',{
			title:'后台登录'
		})
	});
	//后台注册
	app.get('/admin/register',function(req,res){
		res.render('register',{
			title:'后台注册'
		})
	});
	//添加人员
	app.post('/admin/user/signin',User.signin);



	//微信开发接口  修改成自己的监听
	app.get('/weixin',function(req,res){
		var token = 'weixin',     //  改成自己在微信公众号的token 切记
			signature = req.query.signature,
			timestamp = req.query.timestamp,
			echostr = req.query.echostr,
			nonce = req.query.nonce,
			oriArray = new Array();
		oriArray[0] = nonce;
		oriArray[1] = timestamp;
		oriArray[2] = token;
		oriArray.sort();
		var original = oriArray.join('');

		var shaObj = new jsSHA(original, 'TEXT');
		var scyptoString=shaObj.getHash('SHA-1', 'HEX');

		if(signature == scyptoString){
			res.end(echostr);
		}else{
			res.render('weixin',{
				title:'loser',
				content:'消息不是来自微信的 你个loser'
			});
		}
	});
	//返回微信数据    修改成自己的监听
	app.post('/weixin',function(req,res){
		var postData = '';
		req.on('data',function(data){
			postData = data;
		});
		req.on('end',function(){
			var xmlStr = postData.toString('utf-8',0,postData.length);
			var ToUserName = '',
				FromUserName = '',
				CreateTime = '',
				MsgType = '',
				Content = '',
				tempName = '';
			//解析消息
			var parse = new xml.SaxParser(function(cb){
				cb.onStartElementNS(function(elem,attra,prefix,uri,namespaces){
					tempName=elem;
				});
				cb.onCharacters(function(chars){
					chars=chars.replace(/(^\s*)|(\s*$)/g, "");
					if(tempName === 'CreateTime'){
						CreateTime=chars;
					}
				});
				cb.onCdata(function(cdata){
					switch(tempName){
						case 'ToUserName':
							ToUserName=cdata;
							break;
						case 'FromUserName':
							FromUserName=cdata;
							break;
						case 'MsgType':
							MsgType=cdata;
							break;
						case 'Content':
							Content=cdata;
							break;
					}
				});
				cb.onEndElementNS(function(elem,prefix,uri){
					tempName="";
				});
				cb.onEndDocument(function(){
					//按收到的消息格式回复消息
					CreateTime=parseInt(new Date().getTime() / 1000);
					var msg = '';
					if(MsgType=="text"){	//  做一些逻辑 返回不同内容
						msg="谢谢关注,你说的是:"+Content;
						var sendMessage = '<xml><ToUserName><![CDATA['+FromUserName+']]></ToUserName><FromUserName><![CDATA['+ToUserName+']]></FromUserName><CreateTime>'+CreateTime+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA['+msg+']]></Content></xml>';
						res.send(sendMessage);
					}
				});
			});
			parse.parseString(xmlStr);
		});
	});
}