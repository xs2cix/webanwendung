var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuidv4=require('uuid/v4')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
res.send('Hello World');
})

app.get('/api/v1/users/:userId', (req, res) => {
/*var user = { vorname : "Anne",
nachname : "Musterfrau",
userid : `${req.params.userId}` }*/
var user = users[req.params.userId];
return res.send(user);
});

// Leeres JavaScript-Objekt anlegen
var users = { abc1234 : { vorname : "Anne",
nachname : "Musterfrau",
userid : "abc1234"} }
//Beispiel wie ein neuer Benutzer hinzugefügt werden kann
var randomuserid = uuidv4()
var user = { vorname : "Anne",
nachname : "Musterfrau",
userid : randomuserid }
users[randomuserid] = user;
// Beispiel um einen Benutzer anhand der ID abzurufen


app.get('/api/v1/users', (req, res) => {
return res.send(Object.keys(users));
})

app.post('/api/v1/users', (req, res) => {
var user = req.body
user.userid = uuidv4();
users[user.userid] = user;
return res.send(user.userid)
})

var server = app.listen(8080, function () {
var host = server.address().address
var port = server.address().port
console.log("Webserver running at http://%s:%s", host,
port)
});