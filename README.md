# End points
End points is a nodeJS API to save the geographical location (latitude and longitude) and userID of the user.
and then retrive the list of users by providing  geographical location and desired radius.

##Dependencies:
Make sure you have both the dependencies before using this API.
 - Nodejs
 - Mongodb

##How to use the API.

    

 - `git clone https://AdityaJangid@bitbucket.org/ectolus/endpoints.git`
 - `cd endpoints`
 
 Now install all the other third party library dependencies by running the command
 
 - `npm install`
 
 Start your nodeJS server by using the command.
 - `node server.js`

Now use postman chrome extension to save and get details of user near your area

####**Setps to use postman**

 - **To save the location of user**


	Make a POST request to `http://localhost:3000/setLocation` 
	Now fill the body as :

						

  `  {
    	"userID" : 21,
    	"lat":26.941008,
    	"lng":75.834271
    }`

 - **To get the location of all the  users near you**

Make a POST request to `http://localhost:3000/getUsersNear` 
	Now fill the body as :
	
`{
	"lat":26.941040,
	"lng":75.834215,
	"radius":10
}`
