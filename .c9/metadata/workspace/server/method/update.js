{"filter":false,"title":"update.js","tooltip":"/server/method/update.js","undoManager":{"mark":49,"position":49,"stack":[[{"start":{"row":18,"column":24},"end":{"row":18,"column":25},"action":"insert","lines":["r"],"id":318}],[{"start":{"row":18,"column":25},"end":{"row":18,"column":26},"action":"insert","lines":["e"],"id":319}],[{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["t"],"id":320}],[{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["u"],"id":321}],[{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"insert","lines":["r"],"id":322}],[{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":["n"],"id":323}],[{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":[" "],"id":324}],[{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":[" "],"id":325}],[{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"remove","lines":[" "],"id":326}],[{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":["r"],"id":327}],[{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["e"],"id":328}],[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"insert","lines":["t"],"id":329}],[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["u"],"id":330}],[{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["r"],"id":331}],[{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":["n"],"id":332}],[{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":[" "],"id":333}],[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["r"],"id":334}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["e"],"id":335}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["t"],"id":336}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["u"],"id":337}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["r"],"id":338}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["n"],"id":339}],[{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":[" "],"id":340}],[{"start":{"row":24,"column":1},"end":{"row":24,"column":2},"action":"insert","lines":[";"],"id":341}],[{"start":{"row":24,"column":2},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":342}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":343}],[{"start":{"row":26,"column":0},"end":{"row":52,"column":0},"action":"insert","lines":["exports.update = function(req,Model,url){","    return new Promise(function(resolve,reject){","        Model.findById(req.body._id,function(err,contents){","            if(err){","                return reject(err);","            }else{","                contents.student_co = req.body.student_co;","                contents.title = req.body.title;","                contents.contents = req.body.contents;","                contents.date = req.body.date;","                contents.name = req.body.name;","                contents.inquery_count = req.body.inquery_count;","                contents.attach_file = req.body.file;","                ","                contents.save(function(err,contents){","                    if(err){","                        return reject(err);","                    }else{","                        return resolve(url);","                    }","                });","            }","        });","    });","};","",""],"id":344}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"remove","lines":["u"],"id":345}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["g"],"id":346}],[{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["e"],"id":347}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["t"],"id":348}],[{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["U"],"id":349}],[{"start":{"row":28,"column":7},"end":{"row":48,"column":11},"action":"remove","lines":[" Model.findById(req.body._id,function(err,contents){","            if(err){","                return reject(err);","            }else{","                contents.student_co = req.body.student_co;","                contents.title = req.body.title;","                contents.contents = req.body.contents;","                contents.date = req.body.date;","                contents.name = req.body.name;","                contents.inquery_count = req.body.inquery_count;","                contents.attach_file = req.body.file;","                ","                contents.save(function(err,contents){","                    if(err){","                        return reject(err);","                    }else{","                        return resolve(url);","                    }","                });","            }","        });"],"id":350}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["v"],"id":351}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["a"],"id":352}],[{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["r"],"id":353}],[{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":[" "],"id":354}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["s"],"id":355}],[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["e"],"id":356}],[{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["n"],"id":357}],[{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["d"],"id":358}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["D"],"id":359}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":16},"action":"remove","lines":["sendD"],"id":360},{"start":{"row":28,"column":11},"end":{"row":28,"column":19},"action":"insert","lines":["sendData"]}],[{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":[" "],"id":361}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["="],"id":362}],[{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":[" "],"id":363}],[{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["{"],"id":366}],[{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["}"],"id":367}],[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":[";"],"id":368}],[{"start":{"row":28,"column":25},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":369},{"start":{"row":29,"column":0},"end":{"row":29,"column":7},"action":"insert","lines":["       "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":43},"end":{"row":16,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1488083768304,"hash":"28f33f17a648e53fcdc16cffaea8afa6709184f6"}