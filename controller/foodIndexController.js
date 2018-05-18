var express = require("express");

var router = express.Router();
var food = require("../models/foodIndex.js");

//get route -> index
router.et('/', function(req, res) {
    res.redirect('/food');
});

router.get('/food', function(req, res) {
    foodIndex.all(function(foodIndex){
        res.render('index', { foodIndex: foodIndex });
    });
});

router.post('/food/create', function(req, res) {
    foodIndex.create(req.body.foodIndex, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;