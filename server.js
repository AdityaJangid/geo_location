var express     =   require("express");
var assert = require('assert');
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var Users     =   require("./models/users");





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false, "message" : "Hello World"});
});


router.route("/setUser").post(function(req,res){
	var user     = new Users(); 
	user.userID = req.body.userID; 
	user.location    = [ req.body.lat, req.body.lng ]; 
	user.save(function(err){
         if(err) {
             response = {"error" : true,"message" : "Error adding data"};
         }
         else {
             response = {"error" : false,"message" : "Data added"};
         } res.json(response);
 });
});

router.route("/getUser")
	.post(function(req,res){
		console.log("request.body = ",req.body);
		var one_meter = 1/63710;
		var dist = one_meter*req.body.radius;
		/* var distance = 1000000 / 6371;             // the value on left side  is  10 meter */
		var query = Users.find({'location': {
			$near: [
				req.body.lat,
				req.body.lng
			],
			$maxDistance: dist
		}
	});
	query.exec(function (err, user) {
  if (err) {
    console.log("error=",err);
    throw err;
  }
		else{
			response = {"error" : false,"message" : "data fetched", "users": user };
		}res.json(response);
	}); 
	});




/* router.route("/setUser").post(function(req,res){
 *     var db = new users();
 *     var response = {};
 *     db.userID=req.body.userID;
 *     db.location=req.body.location;
 *     db.save(function(err){
 *         if(err) {
 *             response = {"error" : true,"message" : "Error adding data"};
 *         }
 *         else {
 *             response = {"error" : false,"message" : "Data added"};
 *         } res.json(response);
 *     });
 * });
 *  */




/* router.route("/getUser")
 *     .get(function(req,res){
 *         var max = 1000;
 *         var response = {};
 *         users.findOne({
 *             location:
 *                 { $near : req.body.location  ,
 *                     $maxDistance: max
 *                 }
 *         },function(err,data){
 *             if(err) {
 *                 console.log("err= ", err);
 *                 response = {"error" : true,"message" : "Error fetching data"};
 *             }
 *             else {
 *                 response = {"error" : false,"message" : data};
 *             }
 *             res.json(response);
 *         });
 *     });
 *  */


app.use('/',router);
app.listen(3000);
console.log("Listening to PORT 3000");
console.log("http://localhost:3000/");

