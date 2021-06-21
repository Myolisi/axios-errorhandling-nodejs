function data(req, res, next) {
	console.log('Handling response');
	req.ok = (response) => {
		res.send({
			isError: false,
			message: 'ok',
			data: response,
			status: 200,
		});
	};
	next();
}

module.exports = { data };
