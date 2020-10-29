// Node Express server
const app = require("express")();
const path = require('path');

const port = process.env.PORT || 3000;

const server = app.listen(port,  () => {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});

app.use('/', require('./main.route'));