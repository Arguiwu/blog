var dao = require('../models/article_dao.js');
//文章列表
exports.list = function(req,res){
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
};
//文章详情
exports.detail = function(req,res){
	var model = new dao.dao();
	var id = req.params.id;
	model.findOne(id,function(result){
		if(result.status == "success"){
			res.render('content',{
				title:result.content[0].title,
				article:result.content[0]
			})
		}else{
			res.render('index',{
				title:'错误页面'
			})
		}
	});
};