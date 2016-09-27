module.exports = function(app, router) {
	var UrlsModel 				= require('../models/UrlsModel.js'),
			log 							= require('../config/logger.js'),
			jwt               = require('jsonwebtoken'),
			expressJwt      	= require('express-jwt');


	// Encript specific routes
	// router.use('/api', expressJwt({secret: app.secret}));	

	// server routes
	// handle things like api calls
	// authentication routes
	// sample api route
	router.route('/api/shorten')
		.get(function (req, res, next) {
			var documents = req.query.documents || 25;
			var page = req.query.page || 0;
			UrlsModel
				.find({})
				.limit(documents)
				.skip(page * documents)
				.exec(function(err, urls){
					if(err){
						next(err);
						return;
					}
					res.status(200).send(urls)
				});
		})
		.post(function (req, res, next){
			// next(new Error("POST - /api/shorten Not implemented Yet!"));
			var async = require('async');
			var body = req.body;
			if(!body.original){
				next(new Error("original url is required"));
				return;
			}
			async.waterfall([
					function(cb){
						UrlsModel.findOne({original:body.original}, cb);
					},
					function(url, cb){
						if(url){
							cb(null, url);
						}else{
							var utils = require('../utils/shortenUrl.js');
							url = {
								original:body.original,
								shortened: utils.shortenUrl(body.original),
								validate:true
							}
							cb(null, url);
						}
					},
					function(url, cb){
						if(url.validate && !url._id){
							var shortened = url.shortened;
							UrlsModel.findOne({shortened: shortened},function(err, data){
								if(data){
									// Make shorten version unique with an extra char;
									url.shortened += Math.random(0, 9).toFixed(0);
								}
								cb(null, url);
							});
						}else{
							cb(null, url)
						}
					},
					function(url, cb){
						if(!url._id){
							UrlsModel.create(url, cb);
						}else{
							cb(null, url);
						}
					}
				],
				function(err, result){
					if(err){
						next(err);
						return;
					}
					res.status(201).send(result);
				})
			// Post new url shorten service
		});

	router.route('/api/shorten/:id')
		.get(function (req, res, next) {
			next(new Error("GET - /api/shorten/:id not implemented Yet!"));
		})
		.put(function (req, res, next){
			next(new Error("PUT - /api/shorten/:id Not implemented Yet!"));
		})
		.delete(function (req, res, next){
			next(new Error("DELETE - /api/shorten/:id Not implemented Yet!"));
		});

	router.route('*')
		.get(function(req, res, next){
			var prefix = req.url.split('/')[1];
			UrlsModel.findOne({shortened:prefix}, function(err, data){
				if(err){
					next(err);
					return;
				}
				if(!data){
					res.redirect('/#/');
					return;
				}
				var string_url = "";
				var sub_http = 'http://';
				var subs_https = 'https://';
				var protocol = (data.original.indexOf(subs_https) > -1) ? '' : sub_http;
				if(data.original){
					string_url = data.original.split('http://');
					string_url = string_url[string_url.length-1];
				}
				res.redirect(protocol + string_url);
			})
		})
};