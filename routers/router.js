const { Router } = require('express');
const playersController = require('../controllers/players-controller');

const router = new Router();

router.get('/players', playersController.getPlayersAll);

router.post('/players', playersController.createPlayer);

router.put('/players/:email', playersController.updatePlayer);

router.get('/players/:email', playersController.getPlayerByEmail);

module.exports = router;
