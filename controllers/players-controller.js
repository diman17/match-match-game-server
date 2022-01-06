const playersService = require('../services/players-service');

class PlayersController {
  async getPlayersAll(req, res) {
    try {
      const players = await playersService.getPlayersAll();
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createPlayer(req, res) {
    try {
      const player = await playersService.createPlayer(req.body);
      res.status(200).json(player);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updatePlayer(req, res) {
    try {
      const { email } = req.params;
      await playersService.updatePlayer(req.body, email);
      res.status(200).json(`Player is updated`);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getPlayerByEmail(req, res) {
    try {
      const { email } = req.params;
      const player = await playersService.getPlayerByEmail(email);
      res.status(200).json(player);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new PlayersController();
