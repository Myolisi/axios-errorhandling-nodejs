const api = require('../utils/axios');

function getUsers(req, res, next) {
	console.log('getting users');
	const route = req.params.id ? `users/${req.params.id}` : 'users';
	api.get(
		route,
		null,
		(response) => {
			req.ok(response.data);
		},
		(err) => {
			next(err);
		}
	);
}

module.exports = { getUsers };
