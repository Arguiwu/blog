var dataModel = require('../config/db.js');
var Article = require('./article.js').article;
article = new dataModel({
	tableName:"articles"
});
function article_dao(){
	this.list = function(callback){
		var articles = {
			status:"success",
			code:200,
			content:[]
		};
		article.find("all",function(err,rows,fields){
			if(err) throw err;
			articles.content = rows;
			callback(articles);
		});
	}
}
exports.dao = article_dao;