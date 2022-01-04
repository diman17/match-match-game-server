const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send('match-match-game-server');
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
