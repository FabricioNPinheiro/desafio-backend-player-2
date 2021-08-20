const Sequelize = require("sequelize");

const sequelize = new Sequelize("player2", "root", "aprendizado", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize,
  sequelize,
};

/* sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.log("Falha ao se conectar: " + error);
  });

const Enterprise = sequelize.define("enterprises", {
  cnpj: {
    type: Sequelize.STRING,
  },
  razao_social: {
    type: Sequelize.STRING,
  },
  nome_fantasia: {
    type: Sequelize.STRING,
  },
  situacao_cadastral: {
    type: Sequelize.INTEGER,
  },
});

Enterprise.create({
  cnpj: "23545677",
  razao_social: "temp",
  nome_fantasia: "companhia",
  situacao_cadastral: 2,
});

/* Enterprise.sync({ force: true }); 
 */
