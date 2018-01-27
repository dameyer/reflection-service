/**
 * test services
 *
 */

let express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    app = express(),
    port = process.env.PORT || 5000,
    http = require("http");

app.use(cookieParser());
app.use(session({
    secret: 'process.env.SECRET sorry ms jackson',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(__dirname + '/public'));

app.get('/service',
    function(req, res) {
        let data = req.param('data')
        console.log(data)

        res.setHeader("Access-Control-Allow-Origin", "https://wmp-dh-dev-ed--c.na73.visual.force.com");        
        res.setHeader("Vary", "Origin")
//        res.setHeader("Access-Control-Allow-Origin", "*");

        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        res.send(data);
    });




app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});