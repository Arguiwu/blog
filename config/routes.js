var dao = require('../models/article_dao.js');
module.exports = function(app){
	//首页
	app.get('/',function(req,res){
		var model = new dao.dao();
		model.list(function(result){
			if(result.status == "success"){
				res.render('index',{
					title:'文章列表',
					articles:result.content
				})
			}else{
				res.render('index',{
					title:'错误页面'
				})
			}
		});
	});
	//分类
	app.get('/category',function(req,res){
		res.render('index',{
			title:'分类列表'
		})
	});
	//档案
	app.get('/archive',function(req,res){
		res.render('index',{
			title:'档案'
		})
	});
	//标签
	app.get('/tag',function(req,res){
		res.render('index',{
			title:'标签'
		})
	});
}