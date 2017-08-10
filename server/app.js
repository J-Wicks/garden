const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port 3000`);
});
