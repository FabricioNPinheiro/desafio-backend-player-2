const EnterpriseModel = require("../models/EnterpriseModel");
let Enterprise = [
  {
    cnpj: "19131243000197",
    razao_social: "OPEN KNOWLEDGE BRASIL",
    nome_fantasia: "Sapiens",
    situacao_cadastral: 1,
  },
  {
    cnpj: "75331243000197",
    razao_social: "OPEN KNOWLEDGE CANADÁ",
    nome_fantasia: "Paperarts",
    situacao_cadastral: 2,
  },
];

module.exports.insertEnterprise = (req, res) => {
  EnterpriseModel.create({
    cnpj: req.body.cnpj,
    razao_social: req.body.razao_social,
    nome_fantasia: req.body.nome_fantasia,
    situacao_cadastral: req.body.situacao_cadastral,
  })
    .then(() => {
      res.status(201).json({ message: "sucess" });
    })
    .catch(() => {
      res.status(400).json({ message: "failed" });
    });
};

module.exports.listEnterprise = (req, res) => {
  let return_enterprise = Enterprise;
  if (return_enterprise.length > 0) res.json(return_enterprise);
  else res.status(404).json({ message: "Lista vazia" });
};

module.exports.deleteEnterprise = (req, res) => {
  let cnpj = req.params.id;
  Enterprise = Enterprise.filter((enterprise) => {
    return enterprise.cnpj != cnpj;
  });
  res.json({ message: "Empresa removida" });
};
