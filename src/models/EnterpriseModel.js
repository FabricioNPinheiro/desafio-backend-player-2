const db = require("../config/database");

const Enterprise = db.sequelize.define("enterprise", {
  cnpj: {
    type: db.Sequelize.STRING,
  },
  razao_social: {
    type: db.Sequelize.STRING,
  },
  nome_fantasia: {
    type: db.Sequelize.STRING,
  },
  situacao_cadastral: {
    type: db.Sequelize.INTEGER,
  },
});

module.exports = Enterprise;

/* Enterprise.sync({ force: true }); */
