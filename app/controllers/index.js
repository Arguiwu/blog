var dao = require('../models/article_dao.js');
//首页
exports.index = function(req,res){
	var model = new dao.dao();
	model.list(function(result){
		if(result.status == "success"){
			res.render('index',{
				title:'月桂叶的博客',
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