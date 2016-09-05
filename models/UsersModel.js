// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
	name						: {type: String, default: ''},
	lastname				: {type: String},
	age							: {type: Number},
	email						: {type: String, lowercase: true, trim: true, unique:true, required:true}
});
