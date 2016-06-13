var dataModel = require('../../config/db.js');
var Category = require('../schemas/category.js').category;
var Article = require('../schemas/article.js').article;
articleModel = new dataModel({
	tableName:"articles"
});
categoryModel = new dataModel({
	tableName:"categorys"
});
function category_dao(){
	var categorys = {
		status:"success",
		code:200,
		count:0,
		content:[],
		articles:[]
	};
	this.list = function(callback){
		categoryModel.find("all",function(err,rows,fields){
			var count = 0;
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				count += rows[i].count;
				var category = new Category(
					rows[i].id,
					rows[i].name,
					rows[i].count
				);
				categorys.content.push(category);
			}
			categorys.count = count;
		});
		articleModel.find("all",function(err,rows,fields){
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				var article = new Article(
					rows[i].id,
					rows[i].title,
					rows[i].url,
					rows[i].content,
					rows[i].tag,
					rows[i].category,
					rows[i].date,
					rows[i].share,
					rows[i].summary
				);
				categorys.articles.push(article);
			}
			callback(categorys);
		});
	}
}
exports.dao = category_dao;