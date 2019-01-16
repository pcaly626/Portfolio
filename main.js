var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/"));
app.listen(8080, function(){
    console.log('App is listening')
});


var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    database    : 'Portfolio'
});



app.get("/", function(req,res){
    var q = 'select count(*) as count from email_list';
    connection.query(q, function(err,results){
        if(err){ 
            throw err;
        }
     console.log("FUCK yeah !!!  !!!");

        var  count = results[0].count;
         res.render('index',{count});
    });
});


app.post('/register', function(req,res){
 var person = {email: req.body.email};
    console.log(person);
 connection.query('INSERT INTO email_list SET ?', person, function(err, result) {
 console.log(err);
 console.log(result);
 res.redirect("/");
 });
});






function toggleDropdown() {
  let navbarToggle = document.getElementById("navbar-toggle");
  if (navbarToggle.className === 'topnav') {
    navbarToggle.className += ' responsive';
  } else {
    navbarToggle.className = 'topnav';
  }
};

function toggle() {
    alert("Thank You!");
}