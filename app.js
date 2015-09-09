var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189/zhufengshop');
var bodyParser = require('body-parser');
var users = require('./routes/users');
//使用静态文件服务器中间件
app.use(express.static(path.join(__dirname,'app','public')));
app.use(bodyParser.json());//解析请求 content-type application/json
app.use(bodyParser.urlencoded({extended:false}));// application/x-form-urlencoded
app.use('/users',users);


app.listen(8080);