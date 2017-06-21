var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
	userID: Number,
	location: {
      type: ["Point"],
   }
}; // create model if not exists.
module.exports = mongoose.model('users',userSchema);
