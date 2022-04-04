const crypto = require('crypto')

class authController {

	static async test(req,res){
		return 	res.render('auth',
		{
			statuscode:200, type: 'success', message:'Success result',
		});
	}
	
}

module.exports = authController;
