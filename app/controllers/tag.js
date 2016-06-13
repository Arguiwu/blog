var dao = require('../models/article_dao.js');
//标签
exports.list =  function(req,res){
	res.render('index',{
		title:'标签'
	})
};