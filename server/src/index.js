/** @format */

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('./middleware');
const dbConnect = require('./dbConnect');
const logs = require('./api/logs');
require('dotenv').config();

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGINAL,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'This is Working',
  });
});

// Api Route
app.use('/api/logs', logs);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

// Database connection
dbConnect();
const port = process.env.PORT || 1357;
app.listen(port, () => {
  console.log(`Listen at http://localhost:${port}`);
});
