//need 3 function. Add new burger, update to change devoured boolean, and select all for testing
var connection = require("./connection");

var orm = {
  selectAll: function (tableName, callback) {
     var queryString = "SELECT * FROM " + tableName + ";";
     connection.query(queryString, function (err, result) {
        if (err) {
           throw err;
        }
        callback(result);
     });
  },
  insertOne: function (table, column, value, cb) {
     var queryString = "";
     queryString += `INSERT INTO ${table} (${column}) VALUES `;
     queryString += `('${value}');`
               
     console.log(queryString);

     connection.query(queryString, function (err, result) {
        if (err) {
           throw err;
        }

        cb(result);
     });
  },
  updateOne: function(table, column, value, id, cb){
     var queryString = "";
     queryString += `UPDATE ${table} SET ${column} = '${value}' `;
     queryString += `WHERE id = ${id};`

   //   console.log(queryString);

     connection.query(queryString, function (err, result) {
        if (err) {
           throw err;
        }

        cb(result);
     });
  }
};

//testing connection. Good thing forgot to module.exports = connection;
// orm.selectAll("burgers", function(result){
//   console.log(result);
// })

module.exports = orm;