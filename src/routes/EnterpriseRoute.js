const controller = require("../controller/EnterpriseController");
const authController = require("../controller/auth");

module.exports = (app) => {
  app.use("/enterprise", authController.checar);

  app.post("/enterpriseNew", controller.insertEnterprise);

  app.get("/enterprise", controller.listEnterprise);

  app.put("/enterpriseUpdate/:cnpj", controller.updateEnterprise);

  app.delete("/enterprise/:cnpj", controller.deleteEnterprise);
};
