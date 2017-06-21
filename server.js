var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./models/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false, "message" : "Hello World"});
});


router.route("/setUser").post(function(req,res){
        var db = new mongoOp();
        var response = {};
				db.userID=req.body.userID;
				db.location=req.body.location;
			db.save(function(err){
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });




app.use('/',router);
app.listen(3000);
console.log("Listening to PORT 3000");



