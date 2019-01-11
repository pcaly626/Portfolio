/*const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

//View Engine

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//Static folder
app.use('/', express.static(path.join('__dirname', '/')));


//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello');
    
});

app.post('/', (req,res) => { console.log(req.body)});

app.listen(3000, () => console.log("server started"));


*/

var mysql = require('mysql');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.listen(8080, function(){
    console.log('App is listening')
});

app.set("view engine", "ejs");


var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'pcaly626',
    database    : 'join_us'
});


app.get("/", function(req,res){
    var q = 'select count(*) as count from email_list';
    connection.query(q, function(err,results){
        if(err) throw err;
        var  count = results[0].count;
         res.render('home',{count});
    });
});


app.post('/register', function(req,res){
 var person = {email: req.body.email};
 connection.query('INSERT INTO email_list SET ?', person, function(err, result) {
 console.log(err);
 console.log(result);
 res.redirect("/");
 });
});

