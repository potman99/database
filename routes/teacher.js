const express = require('express');

const router = express.Router();

const student = {

    firstname:"PU",
    lastname:"Puchała",
    age:"5",
    phonenumber:"505050505",
    email:"a@a"
}


router.get('/',(req,res)=>{
    res.render('teacher',
    {firstname:student.firstname,
    lastname:student.lastname,
    age:student.age,
    phonenumber:student.phonenumber,
    email:student.email,
});
});

module.exports = router;