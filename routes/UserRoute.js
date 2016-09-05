module.exports = function(app, router) {
	var User 							= require('../models/UsersModel.js'),
			Account						= require('../models/AccountsModel.js'),
			log 							= require('../config/logger.js'),
			util							= require('util'),
			passport					= require('passport'),
			LocalStrategy     = require("passport-local").Strategy,
			jwt               = require('jsonwebtoken'),
			expressJwt      	= require('express-jwt');


	// Encript specific routes
	router.use('/api', expressJwt({secret: app.secret}));	

	// server routes
	// handle things like api calls
	// authentication routes
	// sample api route
	router.route('/api/users')
		.get(function (req, res, next) {
			next(new Error("GET - /api/users not implemented Yet!"));
			// Get users service example
			// User.find(function(err, users) {
			// 	if (err)
			// 		next(err);
			// 	res.json(users); // return all users in JSON format
			// 	next();
			// });
		})
		.post(function (req, res, next){
			next(new Error("POST - /api/users Not implemented Yet!"));
			// Post new user service example
			// var user =  new User(req.body);
			// user.save(function(err){
			// 	if(err){
			// 		next(err);
			// 	}else{
			// 		log.console("se ha guardado user ");
			// 		res.send(200,user);
			// 		next();
			// 	}
			// });
		});

	router.route('/api/users/:id')
		.get(function (req, res, next) {
			next(new Error("GET - /api/users/:id not implemented Yet!"));
			// Get user with id params service example
			// User.findById(req.params.id, function(err, user) {
			// 	if (err){
			// 		next(err);
			// 	}
			// 	res.json(user); // return user in JSON format
			// });
		})
		.put(function (req, res, next){
			next(new Error("PUT - /api/users/:id Not implemented Yet!"));
			// Put  user service example
			// var user =  new User(req.body);
			// user.save(function(err){
			// 	if(err){
			// 		next(err);
			// 	}else{
			// 		log.console("se ha guardado user ");
			// 		res.send(200,user);
			// 		next();
			// 	}
			// });
		})
		.delete(function (req, res, next){
			next(new Error("DELETE - /api/users/:id Not implemented Yet!"));
			// DELETE  user service example
			// User.remove({_id:req.params.id}, function(err){
			// 	if(err){
			// 		next(err);
			// 	}else{
			// 		log.console("se ha guardado user ");
			// 		res.send(200);
			// 		next();
			// 	}
			// });
		});

	passport.use(Account.createStrategy());
	passport.serializeUser(Account.serializeUser());
	passport.deserializeUser(Account.deserializeUser());

	// Unlocked route -- In this service, we have to set headers for the next requests
	router.route('/signup')
		.post(function (req, res, next){
			console.log("POST - /signup");
			createUser(req, res, next);
		});

	router.route('/login')
		.post(function (req, res, next){
			// next(new Error("Error on login implementation!!"));
			// Authentication example with token
			return passport.authenticate('local', function(err, user, info){
				log.console(user)
				var data={};
				data.err=err;
				data.user=user;
				data.info=info;
				console.log(data.user.user_id)
				if(data.user){
					User.findById(data.user.user_id, function(err, user){
						if(err) next(err);
						// Serialize user with token... this token will be used to the next locked requests like /api in this file, 
						// Token have to be setted on header as an Authorization  -  Token string start with 'Bearer '
						// Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NWQ1MWQ2Yzg0MGU5MGQwMGI5OGQxNjgiLCJlbWFpbCI6ImFuZ2VsLm1hbGF2YXJAZ21haWwuY29tIiwiX192IjowLCJuYW1lIjoiIn0.bM14LfnrpV-njgr_DQcj6F_0Fdr3qcMTicpl59kUgKo
						if(user){
							data.token = jwt.sign(user, app.secret)
						}
						console.log(user)
						if(!user)
							next(new Error("User not found"));
						data.user = user;
						data.user.user_id = user._id;
						console.log(data.user.user_id);
						res.send(200, data);
						next();
					});
				}else{
					next(new Error("Account not found"));
				}
			})(req, res);
		});



	function createUser(req, res, next){
		req.checkBody('email', 'Email es requerido.').notEmpty();
		var errors = req.validationErrors();
		if (errors) {
			next(new Error(errors[0].msg));
			return;
		}
		Account.findByUsername(req.body.email, function (err, account){
			if (account != null ) {
				return res.send(400, { message:'El email ' + req.body.email + ' ya se encuentra registrado.' });
			}else{
				var user = new User(req.body);
				user.save(function(err, userInfo) {
					if (err){
						next(err);
						return;
					}
					res.send(201, userInfo);
					if (req.body.email && req.body.password){
						log.info("Usuario creado  email:"+req.body.email);
						return createAccount(req.body.email, req.body.password, userInfo);
					}
				});
				return;
			}
		});  
	}

	createAccount = function(username,password,user) {
		Account.register(new Account({ username : username.toLowerCase(), user_id:user._id }), password.toString(), function(err, account) {
			if (err) {
				log.error(err);
			} else {
				log.info("Cuenta creada");
			}
			return;
		});
	};

};