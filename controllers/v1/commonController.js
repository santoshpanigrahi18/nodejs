

class commonController {

	
	
    static async page(req, res){
		console.log(req._parsedOriginalUrl.path);
        try {
			return 	res.render('page',
			{
				statuscode:200, type: 'success', page:req._parsedOriginalUrl.path,message:'Success result',
			});
        } catch (error) {

			return 	res.render('error',
			{
				statuscode:500, type: 'error', message:'Something went wrong',
			});        
		}
    } 

    static async index(req, res){
		//console.log(req);
        try {
			return 	res.render('index',
			{
				statuscode:200, type: 'success', page:'Home', message:'Success result',
			});
        } catch (error) {

			return 	res.render('error',
			{
				statuscode:500, type: 'error', message:'Something went wrong',
			});        
		}
    }  
	
}

module.exports = commonController;
