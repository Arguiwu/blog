var mysql = require('mysql');
exports.dbConnection = function(){
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'a7631134',
		database:"myBlog"
	});
}