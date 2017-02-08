const app = require('express')(),
      bodyParser = require('body-parser'),
      consign = require('consign');

// const crossDomain = (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }

// app.use(crossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
  .include('./utils')
  .then('./controllers')
  .then('./api')
  .then('./routes')
  .into(app);

module.exports = app;
