const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderHistorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
       //  required:true,
       default:"https://unsplash.com/photos/five-tomatoes-in-round-brown-wooden-platet-EPwuZxdketc",
        set:(v)=> v==="" ? "https://unsplash.com/photos/five-tomatoes-in-round-brown-wooden-platet-EPwuZxdketc":v
   },
   createdAt:{
    type:Date,
    default:Date.now,
   },
   description:{
    type:String,
    required:true
   },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    }
})

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);
module.exports = OrderHistory;