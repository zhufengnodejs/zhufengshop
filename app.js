var express = require('express');
var path = require('path');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189/zhufengshop');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var wares = require('./routes/wares');
//使用静态文件服务器中间件
app.use(express.static(path.join(__dirname,'app','public')));
app.use(bodyParser.json());//解析请求 content-type application/json
app.use(bodyParser.urlencoded({extended:false}));// application/x-form-urlencoded
app.use(session({
    secret:'zhufengshop',
    resave:true,
    saveUninitialized:true,
    cookie:{
        maxAge:60*60*100
    },
    store:new MongoStore({
        url:'mongodb://123.57.143.189/zhufengshop'
    })
}));
app.use('/users',users);
app.use('/wares',wares);

app.listen(8080);