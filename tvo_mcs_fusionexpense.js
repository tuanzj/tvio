/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.put('/mobile/custom/TVO_MCS_FusionExpense/expenses/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.status(statusCode).send(result);
	});

	service.delete('/mobile/custom/TVO_MCS_FusionExpense/expenses/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/TVO_MCS_FusionExpense/expenses/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.status(statusCode).send(result);
	});

	service.post('/mobile/custom/TVO_MCS_FusionExpense/expenses', function(req,res) {
		var result = {};
		var statusCode = 201;
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/TVO_MCS_FusionExpense/expenses', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.status(statusCode).send(result);
	});

};
