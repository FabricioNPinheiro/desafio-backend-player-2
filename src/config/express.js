const express = require("express");
const routerEnterprise = require("../routes/EnterpriseRoute");
const routerUser = require("../routes/UserRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = () => {
  const app = express();

  app.use(cors());

  app.set("port", 3002);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  routerEnterprise(app);
  routerUser(app);
  return app;
};
