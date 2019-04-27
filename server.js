var orm = require('orm');
var mysql = require('mysql');
var express = require('express');
var exphbs  = require('express-handlebars');\

var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : 3307,
  database : 'databaseReplaceThis'
});
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });