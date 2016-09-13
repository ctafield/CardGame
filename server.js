// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express

var bodyParser = require('body-parser');
var Game       = require('./server/game.js');
var game       = new Game();

app.use(express.static('public'));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR VIEWS
var viewRouter = express.Router();

viewRouter.get('/', function( req, res) {
    res.send('public/index.html');
});

// ROUTES FOR OUR API
// =============================================================================
var apiRouter = express.Router();             // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
apiRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
apiRouter.route('/player')
    .put(function(req, res) {
        if (!req.body) return res.sendStatus(400);
        var result = game.addPlayer(req.body.name);
        res.json({message: result});
    })
    .delete(function(req, res) {
        res.json({ message: 'player has left' });
    })
    .get(function(req, res) {
        res.json({ message: 'here are the players' });
    });
    
apiRouter.route('/game/start')
    .post(function(req, res) {
        var result = game.startGame();
        res.json({message: result});
    });

apiRouter.route('/game/end')
    .post(function(req, res) {
        var result = game.endGame();
        res.json({message: result});
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);
app.use('/', viewRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Game API available on port ' + port);