var mongoose = require('mongoose');
module.exports = mongoose.model('Ware',new mongoose.Schema({
    name:String, //商品名称
    price:Number,//商品价格
    imgSrc:String, //商品图片路径
}));