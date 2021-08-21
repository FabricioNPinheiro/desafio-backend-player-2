function render(enterprise) {
  return {
    id: enterprise._id,
    cnpj: enterprise.cnpj,
    razao_social: enterprise.razao_social,
    nome_fantasia: enterprise.nome_fantasia,
    situacao_cadastral: enterprise.situacao_cadastral,
  };
}

module.exports.render = render;

function renderMany(enterprises) {
  return enterprises.map(render);
}

module.exports.renderMany = renderMany;
