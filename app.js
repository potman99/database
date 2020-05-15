const express = require('express')
const app = express()
const port = 3000
  
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


