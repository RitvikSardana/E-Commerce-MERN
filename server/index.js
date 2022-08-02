const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const userRoute = require('./routes/user')

mongoose.connect(process.env.MONGO_URL)
    .then(()=>app.listen(process.env.PORT || 1337,()=>{
        console.log("DB Connected and Server Running")
    }))
    .catch((err)=>{
        console.log(err)
    })


app.use(express.json())    
app.use('/api/users',userRoute)