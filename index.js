const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routers/router');
require('dotenv').config();

const { PORT, DB_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

mongoose
  .connect(DB_URL)
  .then(() => console.log('Connected with MongoDB'))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
