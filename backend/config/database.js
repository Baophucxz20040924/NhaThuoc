const mongoose = require('mongoose');

const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const con = await mongoose.connect('mongodb://127.0.0.1:27017/thuoc');
    console.log(`✅ MongoDB connected at: ${con.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;

