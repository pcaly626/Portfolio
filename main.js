var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
var signIn = require('./.gitignore/SQLUser');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/"));
app.listen(8080, function(){
    console.log('App is listening')
});

var connection = mysql.createConnection(signIn);
  
app.get("/", function(req,res){
    connection.query(q, function(err,results){
        if(err){ 
            throw err;
                console.log("Result: " + result);
        }

        var  count = results[0].count;
         res.render('index');
    });
});

app.post('/register', function(req,res){
    
  var sql = "INSERT INTO email_list (email ,name, user_comment) VALUES ?";
  var values = [
    [req.body.email, req.body.postername, req.body.message]
  ];
 connection.query(sql, [values], function(err, result) {
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
};