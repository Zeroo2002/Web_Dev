const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xdev2002:xdev2002@cluster0.40kcggm.mongodb.net/Ecommerce')
.then(()=>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Disconnected from database")
})