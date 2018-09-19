const Player = require("../models/players");

const controller = {

  show: (req, res) => {
    Player.find()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err));
  },
}

module.exports = controller;
