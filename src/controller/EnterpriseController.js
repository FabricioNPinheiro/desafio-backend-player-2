const EnterpriseModel = require("../models/EnterpriseModel");
const EnterpriseView = require("../views/EnterpriseView");

module.exports.insertEnterprise = (req, res) => {
  let promise = EnterpriseModel.create(req.body);
  promise
    .then(() => {
      res.status(201).json({ message: "failure to register company" });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: "successfully registered company " + error });
    });
};

module.exports.listEnterprise = (req, res) => {
  let promise = EnterpriseModel.findAll();
  promise
    .then((enterprises) => {
      res.status(201).json(EnterpriseView.renderMany(enterprises));
    })
    .catch(() => {
      res.status(400).json({ message: "failed" });
    });
};

module.exports.deleteEnterprise = (req, res) => {
  EnterpriseModel.destroy({ where: { cnpj: req.params.cnpj } }).then(() => {
    res
      .status(200)
      .json({ message: "company successfully deleted" })
      .catch((error) => {
        res.status(400).json({ message: "company deletion failure " + error });
      });
  });
};
