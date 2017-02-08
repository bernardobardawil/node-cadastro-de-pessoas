const api = app => {

  const pessoa = app.controllers.pessoa,
        ResponseSchemaBuilder = app.utils.ResponseSchemaBuilder;

  return {
    listar(req, res) {
      const responseBody = new ResponseSchemaBuilder();

      pessoa.lista()
        .then(dados => {
          responseBody.type('success');
          responseBody.data(dados);
          res.status(200).json(responseBody.build());
        })
        .catch(err => {
          responseBody.type('error');
          responseBody.message(err.message);
          res.status(500).json(responseBody.build());
        });
    },

    inserir(req, res) {
      const dados = req.body,
            responseBody = new ResponseSchemaBuilder();

      pessoa.insere(dados)
        .then(pessoa => {
          responseBody.type('success')
          responseBody.message('Registro criado com sucesso!');
          res.status(200).json(responseBody.build());
        })
        .catch(err => {
          responseBody.type('error');
          responseBody.message(err.message);
          res.status(422).json(responseBody.build());
        });
    },

    atualizar(req, res) {
      const id = req.params.id,
            dados = req.body,
            responseBody = new ResponseSchemaBuilder();

      pessoa.atualiza(dados, id)
        .then(pessoa => {
          responseBody.type('success');
          responseBody.message('Dados atualizados com sucesso!');
          res.status(200).json(responseBody.build());
        })
        .catch((err) => {
          responseBody.type('error');
          responseBody.message(err.message);
          res.status(422).json(responseBody.build());
        });
    },

    excluir(req, res) {
      const id = req.params.id,
            responseBody = new ResponseSchemaBuilder();

      pessoa.exclui(id)
        .then(() => {
          responseBody.type('success');
          responseBody.message('Registro excluído com sucesso!');
          res.status(200).json(responseBody.build());
        })
        .catch(err => {
          responseBody.type('error');
          responseBody.message(err.message);
          res.status(422).json(responseBody.build());
        });
    },
  };

};

module.exports = api;
