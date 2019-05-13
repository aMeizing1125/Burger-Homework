var orm = require('../config/orm');


var burger = {
  selectAll: function(callback){
    orm.selectAll("burgers", function(response){
        callback(response);
    })
// },
// insertOne: function(burgerName, callback){
//     column = "burger_name";
//     orm.insertOne("burger", column, burgerName, callback);
// },
// updateOne: function(id, callback){
    // orm.updateOne("burger", "devoured", "1", id, callback);
}

}

module.exports = burger;