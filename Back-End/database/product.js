// model: (collection name, schema)

const mongoose = require('mongoose')

const product_schema = new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    price:{type:Number},
    description:{type: String},
    category:{type:String},
    image:{type:String},
    rating:{type:Object}
})

module.exports = new mongoose.model('Course', product_schema);