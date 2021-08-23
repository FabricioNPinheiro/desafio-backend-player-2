const userController = require("../controller/UserController");
const authController = require("../controller/auth");

module.exports = (app) => {
  app.post("/user/signin", authController.logar);
  app.post("/user", userController.registerUser);

  app.use("/user", authController.checar);
};
