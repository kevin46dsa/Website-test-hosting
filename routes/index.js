const userApiRoutes = require('./userApi');

const constructorMethod = (app) => {
	app.use('', userApiRoutes);

	app.use('*', (req, res) => {
		res
			.status(404)
			.json([
				{ error: 'Page Not Found, try' },
				{ Peopledata: 'https://peopleapidata.herokuapp.com//people' },
				{ Workdata: 'https://peopleapidata.herokuapp.com//work' },
			]);
	});
};

module.exports = constructorMethod;
