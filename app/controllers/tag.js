var dao = require('../schemas/tag_dao.js');
//标签
exports.list =  function(req,res){
	var model = new dao.dao();
	model.list(function(result){
		if(result.status == "success"){
			res.render('tag',{
				title:'标签',
				articles:result.articles,
				tags:result.content,
				active:true
			})
		}else{
			res.render('index',{
				title:'错误页面'
			})
		}
	});
};