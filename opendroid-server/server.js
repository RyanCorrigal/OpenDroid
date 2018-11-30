var express = require('express');
var app = express();

app.get('/', function (req, res) {
    // change BLE address accordingly
    var sphero = require("sphero"), bb8 = sphero("d7bc7a90d431");

    bb8.connect(function () {

        // roll BB-8 in a random direction, changing direction every second
        setInterval(function () {
            bb8.randomColor(function (err, data) {
                console.log(err || "random color assigned to bb8");
            });
            var direction = Math.floor(Math.random() * 360);
            bb8.roll(150, direction);
        }, 1000);
    });
    res.send('Hello World, driods are online now!');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})