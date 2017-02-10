const app = require('./config/express'),
      porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor executando na porta: ${porta}`);
});

module.exports = app;
