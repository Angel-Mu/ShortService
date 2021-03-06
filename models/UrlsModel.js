// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Url', {
	original						:{type: String},
	shortened						:{type: String},
	status					:{type:Boolean, default:true}
});