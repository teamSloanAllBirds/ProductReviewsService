const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const controllers = require('./controllers/controllers');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/reviews', controllers.get);

app.listen(port, () => {
  console.log(`Review app is listening at http://localhost:${port}`);
});
