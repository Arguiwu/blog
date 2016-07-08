var dao = require('../schemas/user_dao.js');
//注册
exports.signin =  function(req,res){
	var model = new dao.dao();
	var _user = req.body.user;
	model.save(_user,function(err,result){
		console.log(result);
		res.redirect('/admin/login');
	});
};