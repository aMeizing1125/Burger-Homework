//this has already been called in another file. 
var express = require('express');

var router = express.Router();
var burger = require("../models/burger");

router.get('/', function (request, response) {
  console.log("test");
  burger.selectAll (function(data) {
    // console.log(data);
    var handlebarObject = {};
    var burgerList = [];
    var devouredList = [];
    data.forEach(function(thisBurger) {
      if (thisBurger.devoured === 0) {
        burgerList.push(thisBurger);
      } else {
        devouredList.push(thisBurger);
      }
    })
    // console.log(burgerList);
    // console.log(devouredList);
    handlebarObject.notEaten = burgerList;
    handlebarObject.eaten = devouredList;

    console.log(handlebarObject);

    response.render("index", handlebarObject);
  })
  
  router.post("/eatBurger", function(request, response) {
    var burgerID = request.body.id;
    console.log(burgerID);
  })

});


module.exports = router; 