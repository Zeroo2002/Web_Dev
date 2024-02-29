const express = require('express');
const app = express();
require('./database/conn')
const products = require('./database/product')

// route : get | post | delete | put
app.get('/',(req,res)=>{
    res.end("Hello world!");
})


app.listen(2024,()=>{
    console.log('Connected to port 2024🔥');
})