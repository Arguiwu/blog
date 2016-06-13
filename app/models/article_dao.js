var dataModel = require('../../config/db.js');
var Article = require('../schemas/article.js').article;
articleModel = new dataModel({
	tableName:"articles"
});
function article_dao(){
	var articles = {
		status:"success",
		code:200,
		content:[]
	};
	this.list = function(callback){
		articleModel.find("all",function(err,rows,fields){
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				var article = new Article(
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
		});
	}
	this.findOne = function(id,callback){
		articleModel.find("all",{where:"id="+id},function(err,rows,fields){
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				var article = new Article(
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
		});
	}
}
exports.dao = article_dao;