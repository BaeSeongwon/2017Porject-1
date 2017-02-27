exports.update = function(req,Model,url){
    return new Promise(function(resolve,reject){
        Model.findById(req.body._id,function(err,contents){
            if(err){
                return reject(err);
            }else{
                contents.student_co = req.body.student_co;
                contents.title = req.body.title;
                contents.contents = req.body.contents;
                contents.date = req.body.date;
                contents.name = req.body.name;
                contents.inquery_count = req.body.inquery_count;
                contents.attach_file = req.body.file;
                
                contents.save(function(err,contents){
                    if(err){
                        return reject(err);
                    }else{
                        return resolve(url);
                    }
                });
            }
        });
    });
};

exports.getUpdate = function(req,Model){
    return new Promise(function(resolve,reject){
        Model.findOne({'_id':req.query.id},function(err,result){
            if(err){
                return reject(false);
            }else{
                return resolve(result);
            }
        });
    });
};

