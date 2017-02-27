exports.create = function(req,Model){
    return new Promise(function(resolve,reject){
        var model = new Model({
            name : req.body.name,
            title : req.body.title,
            inquery_count : req.body.inquery_count,
            date : req.body.date,
            contents : req.body.contents,
            attach_file : req.body.files,
            student_co : req.body.student_co
        });
        
        model.save(function(err){
            if(err){
                reject(err);
            }else{
                resolve('success');
            }
        })
    });
}