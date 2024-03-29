const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes'));
// get driver connection
const dbo = require('./db/connection');

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('../client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
}
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
});
