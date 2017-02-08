const pessoa = app => {
  const { listar, inserir, atualizar, excluir } = app.api.pessoa;

  app.route('/pessoas')
    .get(listar)
    .post(inserir);

  app.route('/pessoas/:id')
    .put(atualizar)
    .delete(excluir);
};

module.exports = pessoa;
