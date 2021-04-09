var express = require('express');
var router = express.Router();
var borgar = require('../models/borgars');

router.get('/', function(req,res){
    borgar.all(function(borgar_data){
        console.log(borgar_data);
        res.render('index');
    })
})

module.exports = router;
