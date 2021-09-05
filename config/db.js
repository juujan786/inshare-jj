require('dotenv').config();
const mongoose = require('mongoose');


function connectDB(){
    //db connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser: true, 
        useUnifiedTopology: true});
     const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected.');
    })
    connection.once('error', (err)=>{
        console.log("Error connecting to Database.");
 })
}

module.exports = connectDB;