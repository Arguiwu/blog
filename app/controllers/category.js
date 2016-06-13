var dao = require('../models/article_dao.js');
//分类
exports.list = function(req,res){
	res.render('index',{
		title:'分类列表'
	})
};