//Import express package & mongoose package by require
const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');


//Import expres package & mongoose package by require

//coming to server json format, so convert to js format
const bodyparser = require("body-parser");

const app =express();



//Customer requests
const requestRoutes =require('./routes/requests');
//inventory
const inventoryRoutes = require("./routes/inventories");

//production
const productionRoutes = require("./routes/productions");

//middleware
app.use(bodyparser.json());
app.use(cors());

//route middleware
app.use(inventoryRoutes);//Inventory

app.use(productionRoutes);//Production

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