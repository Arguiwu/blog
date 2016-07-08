var dataModel = require('../../config/db.js');
var User = require('../models/user.js').user;
var bcrypt = require("bcryptjs");
var SALT_WORK_FACTOR = 10;
var userModel = dataModel.extend({
    tableName: "users",
});
userFind = new dataModel({
	tableName:"users"
});
function user_dao(){
	var users = {
		status:"success",
		code:200,
		content:[]
	};
	this.save = function(_user,callback){
		bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
			if(err){
				console.log(err);
			}else{
				bcrypt.hash(_user.pass,salt,function(err,hash){
					if(err){
						console.log(err);
					}else{
						_user.pass = hash;
						user = new userModel({
							name:_user.name,
							pass:_user.pass,
							role:0,
							date:"2016-07-08 09:34:40",
							disable:0,
							nickname:_user.nickname || ''
						});
						user.save(callback);
					}
				});
			}
		});
	}
	this.findOne = function(name,callback){
		userFind.find('all',{where:"name='"+name+"'"},function(err,rows,fields){
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				var user = new User(
					rows[i].id,
					rows[i].name,
					rows[i].pass,
					rows[i].role,
					rows[i].date,
					rows[i].disable,
					rows[i].nickname
				);
				users.content.push(user);
			}
			callback(users);
		});
	}
	this.comparePassword = function(_passowrd,password,cb){
		bcrypt.compare(_passowrd,password,function(err,isMatch){
			if(err){
				return cb(err);
			}else{
				cb(null,isMatch);
			}
		});
	}
};
exports.dao = user_dao;