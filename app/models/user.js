function user(id,name,pass,role,date,disable,nickname){
	this.id = id;
	this.name = name;
	this.pass = pass;
	this.nickname = nickname;
	this.role = role;
	this.date = date;
	this.disable = disable;
};
exports.user = user;