var dao = require('../models/article_dao.js');
//档案
exports.list = function(req,res){
	var model = new dao.dao();
	model.list(function(result){
		if(result.status == "success"){
			res.render('archive',{
				title:'文章列表',
				articles:result.content,
				active:true
			})
		}else{
			res.render('index',{
				title:'错误页面'
			})
		}
	});
};