const express = require('express')
const app = express()



app.get('/', function (req, res) {
  res.send('Hello World  ')
})
app.get('/home', function (req, res) {
    res.send('Hello World  from home ')
  })

  app.get('/contact', function (req, res) {
    res.send('Hello World  from contact ')
  })

app.listen(4000,()=>{
    console.log("server connecting...");
    
})