var express = require('express');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
    host: 'kwon.cwgympscy27y.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
   //database: 'test',
    password: 'rootroot'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    } else{
        console.log('connected');
    }
});
app.get('/about',function(req,resp){
    connection.query("SELECT*FROM kwon.users", function(error,rows,fields){
        if(!!error){
            console.log('error');
        }  else{
            console.log(rows[1].user_id);
        }
    });
});
app.listen(3000);