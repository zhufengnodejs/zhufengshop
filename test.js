function encrypt(str){
    return require('crypto').createHash('md5').update(str).digest('hex');
}
console.log(encrypt('zhang_renyang@126.com'));