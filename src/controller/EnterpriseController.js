const axios = require("axios");
const EnterpriseModel = require("../models/EnterpriseModel");
const EnterpriseView = require("../views/EnterpriseView");

async function checkCnpj(cnpjNew) {
  const validEnterprise = await axios.get(
    `https://brasilapi.com.br/api/cnpj/v1/${cnpjNew}`
  );
  return validEnterprise.data;
}

module.exports.insertEnterprise = async (req, res) => {
  const api = await checkCnpj(req.body.cnpj);
  if (api) {
    await EnterpriseModel.create({
      cnpj: api.cnpj,
      razao_social: api.razao_social,
      nome_fantasia: api.nome_fantasia,
      situacao_cadastral: api.situacao_cadastral,
    })
      .then(() => {
        res.status(200).json({ message: "successfully registered company" });
      })
      .catch(() => {
        res
          .status(400)
          .json({ message: "company not registered in BrazilAPI" });
      });
  } else {
    res.status(400).json({ message: "failed" });
  }
};

module.exports.listEnterprise = async (req, res) => {
  await EnterpriseModel.findAll()
    .then((enterprises) => {
      res.status(201).json(EnterpriseView.renderMany(enterprises));
    })
    .catch(() => {
      res.status(400).json({ message: "failed" });
    });
};

module.exports.deleteEnterprise = async (req, res) => {
  await EnterpriseModel.destroy({ where: { cnpj: req.params.cnpj } }).then(
    () => {
      res
        .status(200)
        .json({ message: "company successfully deleted" })
        .catch((error) => {
          res
            .status(400)
            .json({ message: "company deletion failure " + error });
        });
    }
  );
};

module.exports.updateEnterprise = async (req, res) => {
  cnpjUpdate = req.params.cnpj;
  const promise = await EnterpriseModel.findOne({
    where: { cnpj: cnpjUpdate },
  });
  await promise.update(req.body).then(() => {
    res
      .status(200)
      .json({ message: "successfully updated company" })
      .catch((error) => {
        res.status(400).json({ message: "failure to update company " + error });
      });
  });
};
