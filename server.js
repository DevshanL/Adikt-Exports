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
//Customer Inquiries
const inquiryRoutes =require('./routes/inquiries');
//inventory
const inventoryRoutes = require("./routes/inventories");
//production
const productionRoutes = require("./routes/productions");

//qualitycheck
const qcRoutes = require("./routes/qualitycheck");

//transport management
const transportRoutes = require("./routes/transports");

//middleware
app.use(bodyparser.json());
app.use(cors());

//route middleware
app.use(inventoryRoutes);//Inventory

app.use(productionRoutes);//Production

app.use(requestRoutes);//Customer requests


app.use(qcRoutes); //Quality Check
app.use(transportRoutes); // transport management

app.use(inquiryRoutes);//Customer inquiries

// app.use(qcRoutes); //Quality Check
app.use(exportDetails);//Export Details
app.use(buyerRegister);//Buyer Register
//app.use(buyerRegisterRep); //Buyer Register Report
//app.use(exportDetailsRep);



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