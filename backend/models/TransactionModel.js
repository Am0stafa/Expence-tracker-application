const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,"please add some text"]
    },
    amount:{
        type:Number,
        required:[true,"please add a positive or a negative amount"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
//? export el model 3alatool rater than putting it in a variable and exporting it
module.exports = mongoose.model('Transaction', TransactionSchema)