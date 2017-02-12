exports.loginCheck = function(req){
	if(req.cookies.id == req.session.user_id){
		return {
			loginCheck : req.session.user_id,
			user_name : req.cookies.name
		}
	}else{
		return {
			loginCheck : undefined
		}
	};
}
