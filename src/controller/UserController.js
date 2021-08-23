const User = require("../models/UserModel");
const UserView = require("../views/UserView");
const bcrypt = require("bcrypt");

module.exports.registerUser = (req, res) => {
  let user = {
    nome: req.body.nome,
    email: req.body.email,
    senha: bcrypt.hashSync(req.body.senha, 10),
  };
  let promise = User.create(user);
  promise
    .then((user) => {
      res.status(201).json(UserView.render(user));
    })
    .catch((error) => {
      res.status(400).json({ message: "requisition failed", error: error });
    });
};
