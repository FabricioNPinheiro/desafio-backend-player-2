const controller = require("../controller/EnterpriseController");
const authController = require("../controller/auth");

module.exports = (app) => {
  app.use("/enterprise", authController.checar);
  app.post("/enterprise", controller.insertEnterprise);
  app.get("/enterprise", controller.listEnterprise);
  /*  app.put("/enterprise", controller.updateEnterprise); */
  app.delete("/enterprise/:cnpj", controller.deleteEnterprise);
};
