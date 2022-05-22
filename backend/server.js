const express = require('express');
const mongoose = require('mongoose');
//? allow us to create global variables for our port etc
const dotenv = require('dotenv');
//? for colors in the console
const colors = require('colors');
//? for logging
const morgan = require('morgan');
//? let dotenv know where that file is 

//? bring the file in and mount this router
const transactionRouter = require('./routes/transactionsRoute')

const path = require('path');
 

dotenv.config({ path: './backend/config.env' });

const app = express();



const DB = process.env.DATABASE
mongoose.connect(DB).then(con => {
    console.log("DB is connection successful".yellow);
  }).catch(err=>{
    console.log(err)
  });
  

//? to parse data from the body
app.use(express.json())

if(process.env.NODE_ENV === 'development')
  app.use(morgan('dev'));
 
app.use('/api/v1/transaction',transactionRouter)
//? MUST BE BELOW THIS ROUTE

if (process.env.NODE_ENV === "production") {

  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, '..',"frontend", "build", "index.html"))
  );
  
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}


const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold));

