const axios = require('../utils/axios');

function createPost(req, res, next) {
	axios.post(
		'/posts',
		req.body,
		(res) => {
			req.ok(res.data);
		},
		(err) => {
			next(err);
		}
	);
}

function getAll(req, res, next) {
	console.log('---getting postsdsds');
	axios.get(
		'/postsd',
		null,
		(res) => {
			req.ok(res.data);
		},
		(err) => {
			return next(err);
		}
	);
}

module.exports = {
	createPost,
	getAll,
};
