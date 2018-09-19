const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

const CONN_STRING = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
mongoose.connect(CONN_STRING);

const players_schema = new mongoose.Schema({
    username:String,
    password:String
});

players_schema.plugin(uniqueValidator);
const Player = mongoose.model("players", players_schema);

module.exports = Player;
