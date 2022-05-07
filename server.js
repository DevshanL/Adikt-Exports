//Import express package & mongoose package by require
const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
//coming to server json format, so convert to js format
const bodyParser = require("body-parser");

const app =express();


//import routes
const inventoryRoutes = require("./routes/inventories");
const requestRoutes =require('./routes/requests');//Customer requests

//middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(inventoryRoutes);
app.use(requestRoutes);//Customer requests


const PORT = 8000;
const DB_URL = 'mongodb+srv://adikt:adikt123@adiktdb.baouy.mongodb.net/AdiktExportsDB?retryWrites=true&w=majority';


mongoose.connect(DB_URL)
  .then(() => {
    console.log('Mongodb Successfully Connected');
  })
  .catch((err) => console.log('mongodb connection Failed',err));
  
app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


module.exports = mongoose;