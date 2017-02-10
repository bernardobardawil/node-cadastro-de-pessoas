const chai = require('chai'),
      chaiHttp = require('chai-http'),
      server = require('../server.js'),
      should = chai.should();

chai.use(chaiHttp);

describe('API pessoa:', () => {

  describe('GET pessoa/', () => {
    it('deve retornar sucesso com zero ou mais itens em um array', done => {

      chai.request(server)
        .get('/pessoas')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('type').eql('success');
          res.body.should.have.property('data').be.a('array');
          res.body.data.should.have.length.at.least(0);
          done();
      });

    });
  });

  describe('POST pessoa/', () => {
    it('deve retornar sucesso e uma mensagem quando inserir corretamente uma pessoa', done => {

      const pessoa = {
        nome: 'José Padilha',
        dataNascimento: new Date(1991, 2, 21).toISOString(),
        cpf: '11111111111',
        telefone: '1999999999',
        celular: '19999999999',
        email: 'jose.padilha@gmail.com'
      };

      chai.request(server)
        .post('/pessoas')
        .send(pessoa)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('type').eql('success');
          res.body.should.have.property('message');
          done();
      });

    });
  });

  describe('PUT pessoa/:id', () => {
    const pessoa = {
      nome: 'João R. Rigotti',
    };

    it('deve retornar sucesso e uma mensagem quando atualizar corretamente uma pessoa', done => {

      chai.request(server)
        .put('/pessoas/1')
        .send(pessoa)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('type').eql('success');
          res.body.should.have.property('message');
          done();
      });

    });

    it('deve retornar erro e uma mensagem quando não encontrar uma pessoa para atualizar', done => {

      chai.request(server)
        .put('/pessoas/null')
        .send(pessoa)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('type').eql('error');
          res.body.should.have.property('message');
          done();
      });

    });
  });

  describe('DELETE pessoa/:id', () => {
    it('deve retornar sucesso e uma mensagem quando excluir corretamente uma pessoa', done => {

      chai.request(server)
        .delete('/pessoas/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('type').eql('success');
          res.body.should.have.property('message');
          done();
      });

    });

    it('deve retornar erro e uma mensagem quando não encontrar uma pessoa para excluir', done => {

      chai.request(server)
        .delete('/pessoas/null')
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('type').eql('error');
          res.body.should.have.property('message');
          done();
      });

    });
  });

});
