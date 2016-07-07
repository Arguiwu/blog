var mysqlModel = require('./node-mysql-model');
var dataModel = mysqlModel.createConnection({
	host:"localhost",
	user:"root",
	password:"a7631134",
	database:"myblog"
});
module.exports = dataModel;