//Import expres package & mongoose package by require
const express = require('express');
const mongoose = require('mongoose');


//Import expres package & mongoose package by require
=======
//coming to server json format, so convert to js format
const bodyparser = require("body-parser");



const app =express();

const inventoryRoutes = require("./routes/inventories");

//middleware
app.use(bodyparser.json());


app.use(inventoryRoutes);

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