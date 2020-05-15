const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    
    res.render('student',{name:"PUCHAŁA TY KURWO"});
});


module.exports = router;