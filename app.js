var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./app/views/pages');	// 设置模板相对路径(相对当前目录)
app.set('view engine','jade');		// 设置模板引擎
app.use(require('body-parser').urlencoded({extended: true}));	//处理表单


//持久化session
app.use(session({
	secret:'vinson_blog'
}));

if("development" === app.get("env")){
	app.set("showStackError",true);
	app.locals.pretty = true;
}
require('./config/routes')(app);	//路由
app.use(express.static(path.join(__dirname,'public')));
app.locals.moment = require("moment");	//工具
app.listen(port);
console.log('blog started on port ' + port);