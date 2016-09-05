var path = require("path"),
	rootPath = path.normalize(__dirname + '/..');

module.exports = {
	production: {
		db: 'mongodb://localhost/shortservice_db',
		url: 'http://localhost:8000',
		root: rootPath,
		app: {
			name: 'ShortSevice'
		},
		port: process.env.PORT || 5000
	},
	development: {
		db: "mongodb://localhost/shortservice_db_dev",
		url: 'https://localhost:8010',
		root: rootPath,
		app: {
			name: 'ShortService Dev'
		},
		port: 8010
	},
	test: {
		db: 'mongodb://localhost/shortservice_db_test',
		url: 'http://localhost:8015',
		root: rootPath,
		app: {
			name: 'ShortService Test'
		},
		port: 8015
	}
};