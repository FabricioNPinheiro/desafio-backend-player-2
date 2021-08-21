const express = require("express");
const routerEnterprise = require("../routes/EnterpriseRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middlewares
const Cors = require("../middlewares/Cors");

module.exports = () => {
  const app = express();
  app.set("port", 3002);
  app.use(cors());
  app.use(Cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  routerEnterprise(app);
  return app;
};
