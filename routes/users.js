var express = require('express');
var User = require('../models').User;
var crypto = require('crypto');
var router = express.Router();
function encrypt(str){
    return crypto.createHash('md5').update(str).digest('hex');
}
router.post('/reg',function(req,res){
    var user = req.body;
    user.password = encrypt(user.password);
    var md5Email = encrypt(user.email);
    user.avatar = "https://secure.gravatar.com/avatar/"+md5Email+"?s=48";
    new User(user).save(function(err,user){
        console.error(user);
        if(err){
            res.status(500).json({msg:err});
        }else{
            res.json(user);
        }
    });
});

router.post('/login',function(req,res){
    var user = req.body;
    User.findOne({username:user.username,password:encrypt(user.password)},function(err,user){
        if(err){
            res.status(500).json({msg:err});
        }else{
            req.session.user = user;
            res.json(user);
        }
    });
});

router.post('/logout',function(req,res){
    req.session.user = null;
    res.status(200).json({msg:'success'})
});

router.post('/validate',function(req,res){
    var user = req.session.user;
    if(user && user._id){
        res.status(200).json(user)
    }else{
        res.status(401).json({msg:'用户未登陆'});
    }
});

module.exports = router;