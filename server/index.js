const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=>app.listen(process.env.PORT || 1337,()=>{
        console.log("DB Connected and Server Running")
    }))
    .catch((err)=>{
        console.log(err)
    });

app.use(express.json());
app.use(cors());

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth.js');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripe = require('./routes/stripe')

app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.use('/api/carts',cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout',stripe)