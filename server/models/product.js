
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

const productSchema = new Schema({
    email: String,
    cart: [singleProduct] 
});

// Create a Mongoose model using the main schema
const Product = mongoose.model('Poduct', productSchema);

module.exports = Product;


