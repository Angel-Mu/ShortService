'use strict';
// Shorten url exported function
exports.shortenUrl = function(original) {
	var log = require('../config/logger.js');
	var short = "";
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var valid = false;
	for (var i = 0; i < 5; i++)
		short += chars.charAt(Math.floor(Math.random() * chars.length));
	return short;
}
