const express = require('express');
const mongoose = require('mongoose');
//? allow us to create global variables for our port etc
const dotenv = require('dotenv');
//? for colors in the console
const colors = require('colors');
//? for logging
const morgan = require('morgan');
//? let dotenv know where that file is 
dotenv.config({path: "./config.env"})
//? bring the file in and mount this router
const transactionRouter = require('./routes/transactionsRoute')

const app = express();



const DB = process.env.DATABASE
mongoose.connect(DB).then(con => {
    console.log("DB is connection successful".yellow);
  }).catch(err=>{
    console.log(err)
  });
  

//? to parse data from the body
app.use(express.json())

app.use('/api/v1/transaction',transactionRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold));

