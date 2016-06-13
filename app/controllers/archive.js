var dao = require('../models/article_dao.js');
//档案
exports.list = function(req,res){
	res.render('index',{
		title:'档案'
	})
};