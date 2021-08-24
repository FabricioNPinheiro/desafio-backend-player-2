const express = require("express");
const routerEnterprise = require("../routes/EnterpriseRoute");
const routerUser = require("../routes/UserRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

module.exports = () => {
  const app = express();

  app.use(cors());

  app.set("port", process.env.PORT | 3002);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  routerEnterprise(app);
  routerUser(app);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  return app;
};
