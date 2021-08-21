const controller = require("../controller/EnterpriseController");

module.exports = (app) => {
  app.post("/enterprise", controller.insertEnterprise);
  app.get("/enterprise", controller.listEnterprise);
  /*  app.put("/enterprise", controller.updateEnterprise); */
  app.delete("/enterprise/:cnpj", controller.deleteEnterprise);
};
