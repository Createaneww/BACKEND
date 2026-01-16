require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram' , (req , res)=>{
    res.send("_parthkesath_")
})

app.get('/login' , (req , res)=>{
    res.send('<h1>LOGIN KAR LE LADLEEE</h1>')
})
app .get('/_parthkesath_ ' , (req , res) =>{
    res.send("bhai ki id he")
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})

