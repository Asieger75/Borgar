var express = require('express');
var router = express.Router();
var borgar = require('../models/borgars');

router.get('/', function(req,res){
    borgar.all(function(borgar_data){
        console.log(borgar_data);
        res.render('index', {borgar_data});
    })
})


router.put('/borgars/update',function(req,res){
    borgar.update(req.body.borgar_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});


router.post('/borgars/create', function(req, res){
    borgar.create(req.body.name, function(result){
        res.redirect('/');
    })
})


module.exports = router;
