var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
// create instance of Schema
var Schema =   mongoose.Schema;
// create schema
var userSchema  = new Schema({
	userID: Number,
	location: {
	  /* type: ["Point"], */
		type: [Number],
		index: '2d'
   }
}); // create model if not exists.
module.exports = mongoose.model('users',userSchema);







