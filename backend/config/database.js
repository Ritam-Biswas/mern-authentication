const mongoose = require('mongoose');
require('dotenv').config();

let isConnected;

const connectToDatabase = async () => {
    if(isConnected){
        console.log('database already connected')
    }

    try{
        await mongoose.connect(process.env.MONGO_URI)
        isConnected = true;
        console.log('database connected')
    }catch(error){
        console.error('database connection failed \n Error', error);
    }
    
}

module.exports = connectToDatabase;