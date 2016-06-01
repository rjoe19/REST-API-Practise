//BASE SETUP

// call the packages we need
var express = require('express'); // call express
var app = express();              // define our app using express
var bodyParser = require('body-parser');

//configure app to use bodyParser()
//This will let us get the data from a POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080 //set our PORT



//ROUTES FOR OUR API
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

var router = express.Router();      // get an instance of the express router

// test route to make sure everything is working )accessed at GET http://localhost:8080/
router.get('/', function(req, res){
  res.json({message:'hooray! welcome to our API'});
});

// more routes for our API will happen here


// REGISTER OUR ROUTES ------------------------------------
//All of our routes will be prefixed with /API
app.use('/api', router);



// START THE SERVER
//--------------------------------------------------------------------------------------------
app.listen(port);
console.log('Magic happens on port' + port);
