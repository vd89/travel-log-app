/** @format */

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('./middleware');
const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 1357;
app.listen(port, () => {
  console.log(`Listen at http://localhost:${port}`);
});
