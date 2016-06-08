var mysqlModel = require('mysql-model');
var dataModel = mysqlModel.createConnection({
	host:"localhost",
	user:"root",
	password:"a7631134",
	database:"myBlog"
});
module.exports = dataModel;