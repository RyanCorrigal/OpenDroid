var express = require('express');
var app = express();
var bb8;

var Singleton = (function () {
 
    function createInstance() {
        var sphero = require("sphero"), bb8 = sphero("d7bc7a90d431");
        bb8.connect();
        return bb8;
    }
 
    return {
        getInstance: function () {
            if (!bb8) {
                bb8 = createInstance();
            }
            return bb8;
        }
    };
})();

app.post('/colors/:colorName', function (req, res) {
    Singleton.getInstance();
    bb8.color(req.params["colorName"]);
    console.log("color: " + req.params["colorName"]);
    res.send("Droid color set to " + req.params["colorName"] + '.');
})

app.post('/', function (req, res) {
        Singleton.getInstance();
        // roll BB-8 in a random direction, changing direction every second
        setInterval(function () {
            bb8.randomColor(function (err, data) {
                console.log(err || "random color assigned to bb8");
            });
            var direction = Math.floor(Math.random() * 360);
            bb8.roll(150, direction);
        }, 1000);

    res.send('Hello World, driods are online now!');
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})