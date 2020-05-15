const express = require('express');
const oracledb = require('oracledb');
const dbConfig = require('../dbConfig');
const router = express.Router();
//const students[]=[{name:"JJJ"}]
const subjects = [
    {subName:"Fizyka",grades:[5,4,3,1]},
    {subName:"Matematyka",grades:[1,2,1,1]}

];

const student = {

    firstname:"PU",
    lastname:"Puchała",
    age:"5",
    phonenumber:"505050505",
    email:"a@a"
}

router.get('/',(req,res)=>{
    
    let students = [];
    getStudents().then(result => {
        for(var item of result.rows) {
            students = item[0];
    }});
    
    console.log(students);
    
    res.render('student',
    {
    studentsArray:subjects,
    firstname:student.firstname,
    lastname:student.lastname,
    age:student.age,
    phonenumber:student.phonenumber,
    email:student.email,
    subject:subjects[0].subName,
    grades:subjects[0].grades});
    
});


async function getStudents() {
    try {
        connection = await oracledb.getConnection(  {
          user          : "pwr_19_20_L_018248874",
          password      : "Colvar6808",
          connectString : "156.17.43.90"
        });
    
    result = await connection.execute(
        `SELECT imie ||' '|| nazwisko"name", id_uzytkownika"id" 
         FROM uzytkownik
         WHERE typ_uzytkownika='uczen'`
    );
    } catch (err) {
        console.error(err);
      } finally {
        if (connection) {
          try {
            await connection.close();
          } catch (err) {
            console.error(err);
          }
        }
    }
    return result
}


module.exports = router;