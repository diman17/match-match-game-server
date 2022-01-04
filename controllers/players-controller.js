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
      const newScore = req.body.score;
      await playersService.updatePlayer(newScore, email);
      res.status(200).json(`Score: ${newScore} is updated`);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new PlayersController();
