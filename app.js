var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views/pages');	// 设置模板相对路径(相对当前目录)
app.set('view engine','jade');		// 设置模板引擎

require('./config/routes')(app);	//路由
app.use(express.static(path.join(__dirname,'public')));
app.locals.moment = require("moment");	//工具
app.listen(port);
console.log('blog started on port ' + port);