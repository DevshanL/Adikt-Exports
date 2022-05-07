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

<<<<<<< HEAD
//production
const productionRoutes = require("./routes/productions");
=======

//inventory
const inventoryRoutes = require("./routes/inventories");

//qualitycheck
const qcRoutes = require("./routes/qualitycheck");



const postedRoutes = require("./routes/posteds");
>>>>>>> bc46c30aed08257523c9f25ffa52091b149e0a67

//middleware

app.use(bodyparser.json());
app.use(cors());

//route middleware
<<<<<<< HEAD
app.use(inventoryRoutes);//Inventory

app.use(productionRoutes);//Production

=======
app.use(inventoryRoutes);//Invento
>>>>>>> bc46c30aed08257523c9f25ffa52091b149e0a67
app.use(requestRoutes);//Customer requests

app.use(qcRoutes); //Quality Check
app.use(postedRoutes);


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