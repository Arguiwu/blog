var dao = require('../models/category_dao.js');
//分类
exports.list = function(req,res){
	var model = new dao.dao();
	model.list(function(result){
		if(result.status == "success"){
			res.render('category',{
				title:'分类列表',
				categorys:result
			})
		}else{
			res.render('index',{
				title:'错误页面'
			})
		}
	});
};