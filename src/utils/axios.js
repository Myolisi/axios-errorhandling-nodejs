const axios = require('axios').default;

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 3000,
});

function get(url, params, response, error) {
	return api
		.get(url, params)
		.then(response)
		.catch((err) => error(handleError(err)));
}

function post(url, body, response, error) {
	return api
		.post(url, body)
		.then(response)
		.catch((err) => error(handleError(err)));
}

function handleError(error) {
	const { status, statusText, data } = error.response;
	return { status, statusText, data };
}

module.exports = {
	get: get,
	post: post,
};
