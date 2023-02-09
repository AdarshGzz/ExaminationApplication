const mongoose = require('mongoose')
mongoose.set("strictQuery",false)

const QuestionBankSchema = new mongoose.Schema({
    queNo:Number,
    subject:String,
    queDiscription:String,
    question:String,
    image:String,
    options:Array,
},{
    versionKey:false
})

const QueBank = mongoose.model(`QuestionBank`,QuestionBankSchema)

module.exports = QueBank