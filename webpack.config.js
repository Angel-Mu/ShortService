var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: "./public/src/index.js",
	module: {
		loaders: [{
			test: /\.js|.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0'],
				plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
			}	
		// }, {
		// 	test: /\.scss$/,
		// 	loader: ExtractTextPlugin.extract('css!sass')
		}]
	},
	output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
	// plugins: [
	// 	new ExtractTextPlugin('../client/src/assets/stylesheets/app.css', { allChunks: true })
	// ]
};
