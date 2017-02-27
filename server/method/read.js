exports.read = function(req,Model,Auth){
    return new Promise(function(resolve, reject){
        var page = req.query.page;
        
        if(page == null){
            page = 1;
        }
        
        var skipSize = (page-1)*1;
        var limitSize = 20;
        var pageNum = 1;
        var sendData = {};
        var pageNum = 1;
        
        sendData = Auth.loginCheck(req);
        Model.count(function(err,totalCount){
            pageNum = Math.ceil(totalCount/limitSize);
            Model.find().sort({date:-1}).skip(skipSize).limit(limitSize).exec(function(err,models){
                if(models == ""){
                    sendData.pagination = pageNum;
                    sendData.model = null;
                }else{
                    sendData.pagination = pageNum;
                    sendData.model = models;
                }
                return resolve(sendData);
            });
        });
    });
};

exports.readDetail = function(req,Model,Auth){
    return new Promise(function(resolve,reject){
        var sendData = {};
        sendData = Auth.loginCheck(req);

        return resolve(sendData);
    });
}

exports.readDetails = function(req,Model){
    return new Promise(function(resolve,reject){
          Model.findOne({"_id":req.query.index},function(err,result){
            if(err){
                return reject(err);
            }else{
                return resolve(result);
        }
    })
  });
}