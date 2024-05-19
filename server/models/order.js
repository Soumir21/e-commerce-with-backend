
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const singleProduct = new Schema({
    id: String,
    name:String,
    image:String,
    color:String,
    amount:String,
    stock: String,
    price: String,
});

const orderSchema = new Schema({
    email: String,
    order_id: String,
    payment_id: String,
    cart: [singleProduct],
    date: String,
});

// Create a Mongoose model using the main schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
