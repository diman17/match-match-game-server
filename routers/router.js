const { Router } = require('express');

const router = new Router();

router.get('/players', (req, res) => {
  res.status(200).json('players list');
});

module.exports = router;
