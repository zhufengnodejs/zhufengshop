var express = require('express');
var path = require('path');
var app = express();
//使用静态文件服务器中间件
app.use(express.static(path.join(__dirname,'app','public')));
app.listen(8080);