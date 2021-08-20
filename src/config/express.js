const express = require("express");
const routerEnterprise = require("../routes/EnterpriseRoute");
const bodyParser = require("body-parser");

module.exports = () => {
  const app = express();
  app.set("port", 3002);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  routerEnterprise(app);
  return app;
};
