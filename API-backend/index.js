const express = require('express');
const port = 3001;

const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {

  res.send('Bakery API!');
})


//Controller

const bakeryController = require('./controllers/bakeryController');
app.use('/bakery', bakeryController)

const productsController = require('./controllers/productsController');
app.use('/products', productsController)

const schoolController = require('./controllers/schoolsController');
 app.use('/schools', schoolController)


app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});