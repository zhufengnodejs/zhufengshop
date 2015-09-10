var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189/tttt');
var User = mongoose.model('User',new mongoose.Schema({
    folder:{
        topTime:Date
    }
}));
/*
new User({
    folder:{
        topTime:new Date()
    }
}).save(function(err,result){
        console.error(err);
        console.error(result);
    });
*/

var id = '55f0f8c42bbeac881158f760';
User.findOne({_id:id},function(err,user){
    if (user != null){
        User.update({'_id':id},{$set:{'folder.topTime':new Date()}},function(err,result){
            if (err){
                console.error(err);
            }
            console.error(result);
        });
    }
});

