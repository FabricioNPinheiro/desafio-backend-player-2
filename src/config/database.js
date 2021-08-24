const { connection } = require("mongoose");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("player2", "root", "aprendizado", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize,
  sequelize,
};
