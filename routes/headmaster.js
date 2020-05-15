const express = require('express');

const router = express.Router();

router.get('/edit',(req,res)=>{
    res.send('HEADMASTER EDIT');
});

router.get('/',(req,res)=>{
    res.render('headmaster');
});


module.exports = router;