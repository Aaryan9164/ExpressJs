const express = require('express')


const app = express()
const path=require('path');
const port = 3000



const { engine } = require('express-handlebars');



app.engine('handlebars', engine({ extname: 'handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
// const aaryanmiddleware=(req,res,next)=>{
//     console.log(req)
//     next()
// }
app.use(express.static(path.join(__dirname,"static")))
//app.use( aaryanmiddleware)
app.use('/', require(path.join(__dirname, 'routes/Blogs.js')))


app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})