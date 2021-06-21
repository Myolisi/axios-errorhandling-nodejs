function errorHandler(err, req, res, next) {
	console.log('Handling errors');
	const data = {
		isError: true,
		message: err.statusText || "Something isn't right ",
		data: err.data || '',
		status: err.status,
	};
	res.status(data.status).send(data);
}

module.exports = errorHandler;
