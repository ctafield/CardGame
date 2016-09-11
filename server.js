// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Game       = require('./game.js');
var game       = new Game();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();             // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

router.route('/player')
    .put(function(req, res) {
        var result = game.addPlayer();
        res.json({message: result});
    })
    .delete(function(req, res) {
        res.json({ message: 'player has left' });
    })
    .get(function(req, res) {
        res.json({ message: 'here are the players' });
    });
    
router.route('/game/start')
    .post(function(req, res) {
        var result = game.startGame();
        res.json({message: result});
    });

router.route('/game/end')
    .post(function(req, res) {
        var result = game.endGame();
        res.json({message: result});
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Game API available on port ' + port);