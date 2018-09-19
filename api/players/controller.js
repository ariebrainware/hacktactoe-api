const Player = require("../models/players");
const jwt = require("jsonwebtoken")

const controller = {

  show: async (req, res) => {
      Player.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err));
    },

    login: async (req, res) => {
      const {
        username,
        password
      } = req.body
      if (username && password) {
        Player.findOne({
          username
        }).then(player => {
          if (player) {
            if (player.password === password) {
              const token = jwt.sign({
                  username
                },
                process.env.JWT_SECRET, {
                  expiresIn: "12h"
                }
              )
              res.status(200).send({
                token
              })
            } else {
              res.status(417).send({
                message: "Wrong password"
              })
            }
          } else {
            res.status(404).send({
              message: "Players doesn't exist!!"
            })
          }
        })
      } else {
        res.status(417).send({
          message: "Please fill all the field!"
        })
      }
    }
}

module.exports = controller;