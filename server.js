//Import express package & mongoose package by require
const express = require('express');
const mongoose = require('mongoose');


const app =express();

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