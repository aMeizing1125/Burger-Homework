//this has already been called in another file. 
var express = require('express');

var router = express.Router();
var burger = require("../models/burger");

//we use get to send things to the client/front end. 
router.get('/', function (request, response) {
  // console.log("test");

  burger.selectAll(function (data) {
    // console.log(data);
    var handlebarObject = {};
    var burgerList = [];
    var devouredList = [];

    data.forEach(function (thisBurger) {
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

    // console.log(handlebarObject);

    response.render("index", handlebarObject);

  })
})

//post is meant for the client to send things to the server/backend. 
router.post("/eatBurger", function (request, response) {
  // console.log("post working");
  var burgerID = request.body.id;
  // console.log(burgerID);

  // This the problem--------------
  burger.updateOne(burgerID, function(response) {
    // console.log(response);
  })

})

router.post("/newBurger", function(request, response) {
  // console.log("newBurger post working");
  var burgerName = request.body.burgerName;
  // console.log(burgerName);

  burger.insertOne(burgerName, function(response) {
    // console.log(response);
  })
  
})


module.exports = router; 