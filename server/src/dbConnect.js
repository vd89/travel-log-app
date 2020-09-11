/** @format */

const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.DATABASE_URL;
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
