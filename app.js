const express = require('express')
const oracledb = require('oracledb');
const app = express()
const port = 3000

// Podłączenie do bazy danych
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {

    let connection;
  
    try {
      connection = await oracledb.getConnection(  {
        user          : "pwr_19_20_L_018248874",
        password      : "Colvar6808",
        connectString : "156.17.43.90"
      });
  
      const result = await connection.execute(
          `SELECT * from uzytkownik 
          where typ_uzytkownika='nauczyciel'`
      );
      console.log(result);
      
      
  
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
  }
  
  app.set('view engine', 'ejs');

// Middlewares

const headmasterRoutes = require('./routes/headmaster');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');

app.use('/headmaster',headmasterRoutes);
app.use('/student',studentRoutes);
app.use('/teacher',teacherRoutes);

app.use(express.static(__dirname + '/public'));



app.get('/',(req,res)=>{
  res.render('dashboard');
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))