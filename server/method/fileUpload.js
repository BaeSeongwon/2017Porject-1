exports.imgUpload = function(req,fs,location){
    return new Promise(function(resolve,reject){
         var path = "public/img/" + location + "/";
         var imgUrl;
         fs.rename(path + req.file.filename,path + req.file.originalname,function(err){
           return reject(err);
         });
        
         imgUrl = "/public/img/" + location + "/" + req.file.originalname;
         return resolve(imgUrl);
    });
}

exports.fileUpload = function(req,fs,location){
    return new Promise(function(resolve,reject){
         var path = "public/file/" + location + "/";
         fs.rename(path + req.file.filename,path + req.file.originalname,function(err){
           return reject(err);
         });
         return resolve("success");
    });
}
