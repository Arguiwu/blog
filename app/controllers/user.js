var dao = require('../schemas/user_dao.js');
exports.showAdmin = function(req,res){
	var user = req.session.user;
	res.render('adminindex',{
		title:'博客管理',
		result:user.role
	})
};
//注册
exports.signin =  function(req,res){
	var model = new dao.dao();
	var _user = req.body.user;
	model.save(_user,function(err,result){
		if(result.message == 'success'){
			res.redirect('/admin/login');
		}
	});
};
//登录
exports.signup =  function(req,res){
	var model = new dao.dao();
	var _user = req.body.user;
	var name = _user.name;
	var password = _user.pass;
	model.findOne(name,function(result){
		if(result.status == 'success'){
			var user = result.content[0];
			if(user.name === name){
				model.comparePassword(password,user.pass,function(err,isMatch){
					if(err){
						console.log(err);
					}
					if(isMatch){
						console.log('密码正确！');
						req.session.user = user;
						return res.redirect('/admin');
					}else{
						return res.redirect('/admin/login');
					}
				});
			}
		}
	});
};
//必须登录
exports.signinRequired = function(req,res,next){
	var user = req.session.user;
	if(!user){
		return res.redirect("/admin/login");
	}
	next();
};
//权限
exports.adminRequired = function(req,res,next){
	var user = req.session.user;
	if(user.role <= 10){
		return res.redirect("/admin/login");
	}
	next();
};
exports.login = function(req,res){
	var user = req.session.user;
	if(user){
		return res.redirect("/admin");
	}else{
		res.render('login',{
			title:'后台登录'
		})
	}
};
exports.register = function(req,res){
	var user = req.session.user;
	if(user){
		return res.redirect("/admin");
	}else{
		res.render('register',{
			title:'后台注册'
		})
	}
};
exports.logout = function(req,res){
	delete req.session.user;
	res.redirect('/admin/login');
};