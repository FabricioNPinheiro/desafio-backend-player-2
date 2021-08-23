const userController = require("../controller/UserController");
const authController = require("../controller/auth");

module.exports = (app) => {
  app.post("/user/signin", authController.logar);
  app.post("/user", userController.insertUsers);

  app.use("/user", authController.checar);
  app.get("/user", userController.listUsers);
  app.get("/user/:id", userController.searchUserById);
  app.delete("/user/:id", userController.removeUserById);
};
