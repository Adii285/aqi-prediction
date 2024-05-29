const express=require('express');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://AQI_data:aqi1@cluster0.zpeujv7.mongodb.net/');\
const app =express()
app.use(express.json())
const MongoClient = require("mongodb").MongoClient; 
const url = 'mongodb+srv://AQI_data:aqi1@cluster0.zpeujv7.mongodb.net/'; 
const databasename = "mydatabase";  // Database name 
const cors=require('cors')
app.use(cors())

app.post('/aqi',(req,res)=>{
    const location=req.body.location;
    console.log(location)
    MongoClient.connect(url,{ useNewUrlParser: true }).then((client) => { 
  
        const connect = client.db(databasename); 
      
        // Connect to collection 
        const collection = connect 
                .collection(location); 
      
        // Fetching the records having  
        // name as saini 
        collection.find({  },{projection:{'yhat':1,'ds':1}}) 
            .toArray().then((ans) => { 
                res.json(ans)
            }); 
    }).catch((err) => { 
      
        // Printing the error message 
        console.log(err.Message); 
    })
    
})
app.listen(3000,()=>{
    console.log("server is listening")
})