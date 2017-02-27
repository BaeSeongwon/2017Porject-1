exports.delete = function(req,Model,url){
    return new Promise(function(resolve,reject){
        Model.findByIdAndRemove(req.query.id,function(err){
            if(err){
                return reject(err);
            }else{
                return resolve(url);
            }
        })
    })
}