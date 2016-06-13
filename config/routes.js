var Index = require('../app/controllers/index');
var Article = require('../app/controllers/article');
var Category = require('../app/controllers/category');
var Archive = require('../app/controllers/archive');
var Tag = require('../app/controllers/tag');
module.exports = function(app){
	//首页
	app.get('/',Index.index);
	//文章详情
	app.get('/article/*/:id',Article.detail);
	//分类
	app.get('/category',Category.list);
	//档案
	app.get('/archive',Archive.list);
	//标签
	app.get('/tag',Tag.list);
}