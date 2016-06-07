var Article = require('./article').article;
var mysql = require('mysql');
var dbConnection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'a7631134',
	database:"myBlog"
});
function article_dao(){
	//list 方法从数据库中查询 articles 资源集合
	this.list = function(callback){
		var articles = {
			status:"success",
			code:200,
			content:[]
		};
		dbConnection.query(' SELECT * FROM articles ',function(err,rows,fields){
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				var article = new Article(	//id,title,url,comtent,tag,date,share
					rows[i].id,
					rows[i].title,
					rows[i].url,
					rows[i].content,
					rows[i].tag,
					rows[i].date,
					rows[i].share,
					rows[i].summary
				);
				articles.content.push(article);
			}
			callback(articles);
			// dbConnection.end();
		});
	};
}
exports.dao = article_dao;