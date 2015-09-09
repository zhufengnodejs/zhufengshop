var mongoose = require('mongoose');
module.exports = mongoose.model('User',new mongoose.Schema({
    username:String, //用户名
    password:String,//密码
    email:String, //邮箱
    avatar:String //头像
}));