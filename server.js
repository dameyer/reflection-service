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
        res.send(data);
    });




app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});


