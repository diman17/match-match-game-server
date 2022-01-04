const playerModel = require('../schemas/player-schema');

class PlayersService {
  async getPlayersAll() {
    const playersCount = 10;
    const players = await playerModel.find().sort({ score: 'desc' });
    return players.slice(0, playersCount);
  }

  async createPlayer(player) {
    const newPlayer = await playerModel.create(player);
    return newPlayer;
  }

  async updatePlayer(newScore, email) {
    await playerModel.findOneAndUpdate({ email }, { score: newScore });
  }
}

module.exports = new PlayersService();
