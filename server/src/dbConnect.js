/** @format */

const mongoose = require('mongoose');

const mongoUri = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/travel-log';
const mongoOpt = { useNewUrlParser: true, useUnifiedTopology: true };

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoUri, mongoOpt);
    console.log(`Database server is connected`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
