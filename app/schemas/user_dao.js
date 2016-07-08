var dataModel = require('../../config/db.js');
var User = require('../models/tag.js').user;
var bcrypt = require("bcryptjs");
var SALT_WORK_FACTOR = 10;
var userModel = dataModel.extend({
    tableName: "users",
});
function user_dao(){
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
};
exports.dao = user_dao;