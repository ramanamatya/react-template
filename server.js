const express = require('express');

const app = express();
app.use('/dist', express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

const appPort = process.env.PORT || 8080;
app.listen(appPort, () => {
  console.log(`Starting up server, serving Available on: http://127.0.0.1:${appPort}`);
  console.log('Hit CTRL-C to stop the server');
});
