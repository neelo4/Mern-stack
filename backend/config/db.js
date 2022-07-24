const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
      const conn = await mongoose.connect(process.env.MONGO_URI)

      console.log(`MongoDB Connect ${conn.connection.host}`.bgMagenta.underline);
    }
    catch(eror){
console.log(eror);
process.exit(1);
    }
}

module.exports =  connectDB
   
