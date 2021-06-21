const express = require('express');
const errorHandler = require('./core/middlewares/errorMiddleware');
const { data } = require('./core/middlewares/responseMiddleware');
const coreRouter = require('./routes');

const app = express();

//reponse handler
app.use(data);

//routes
app.use('/api', coreRouter);

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

// error middleware should be last
app.use(errorHandler);

app.listen('8080', () => {
	console.log('Server is running on port 8080');
});
