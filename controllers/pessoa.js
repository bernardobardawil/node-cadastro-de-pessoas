let controladorDeId = 2;

module.exports = {
  _dados: [
    {
      _id: 1,
      nome: 'João Rigotti',
      dataNascimento: new Date(1987, 5, 20).toISOString(),
      cpf: '11111111111',
      telefone: '1999999999',
      celular: '19999999999',
      email: 'joao.webdev@gmail.com'
    },
    {
      _id: 2,
      nome: 'Bianca Melo',
      dataNascimento: new Date(1990, 0, 13).toISOString(),
      cpf: '22222222222',
      telefone: '',
      celular: '19999999999',
      email: 'bianca.melo@gmail.com'
    }
  ],

  lista() {
    return new Promise((resolve, reject) => {
      resolve(this._dados);
    });
  },

  insere(pessoa) {
    return new Promise((resolve, reject) => {
      pessoa._id = ++controladorDeId;
      this._dados.push(pessoa);
      resolve(pessoa);
    });
  },

  atualiza(pessoa, id) {
    return new Promise((resolve, reject) => {

      pessoa._id = parseInt(id, 10);
      this._dados.forEach((p, i) => {
        if (p._id === pessoa._id) {
          this._dados[i] = pessoa;
          resolve(pessoa);
        }
      });

      reject(new Error(`Os dados da pessoa com o id: ${id} não foram encontrados!`));

    });
  },

  exclui(id) {
    return new Promise((resolve, reject) => {
      let controle = this._dados.length;

      id = parseInt(id, 10);
      this._dados = this._dados.filter((pessoa) => pessoa._id !== id);

      if (controle === this._dados.length) {
        reject(new Error(`Não foi possível excluir os dados da pessoa com o id: ${id}!`));
      }

      resolve();
    });
  },

};
