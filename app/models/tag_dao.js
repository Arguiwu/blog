var dataModel = require('../../config/db.js');
var article = require('./article_dao.js');
var Tag = require('../schemas/tag.js').tag;
tagModel = new dataModel({
	tableName:"tags"
});
function tag_dao(){
	var tags = {
		status:"success",
		code:200,
		articles:[],
		content:[]
	};
	var model = new article.dao();
	model.list(function(result){
		if(result.status == "success"){
			tags.articles = result.content;
		}
	});
	this.list = function(callback){
		tagModel.find("all",function(err,rows,fields){
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				var tag = new Tag(
					rows[i].id,
					rows[i].name,
					rows[i].count
				);
				tags.content.push(tag);
			}
			callback(tags);
		});
	}
	this.findOne = function(id,callback){
		tagModel.find("all",{where:"id="+id},function(err,rows,fields){
			if(err) throw err;
			for(var i = 0;i<rows.length;i++){
				var tag = new Tag(
					rows[i].id,
					rows[i].name,
					rows[i].count
				);
				tags.content.push(tag);
			}
			callback(tags);
		});
	}
};
exports.dao = tag_dao;