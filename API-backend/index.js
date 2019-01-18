require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

const port = process.env.DEV_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));




app.get('/', (req, res) => {

  res.send('Bakery API!');
})


//Controller
const authController = require("./controllers/authController");
app.use("/api/", authController);

const bakeryController = require('./controllers/bakeryController');
app.use('/bakery', bakeryController)

const productsController = require('./controllers/productsController');
app.use('/products', productsController);

const subscriptionController = require('./controllers/subscriptionController');
app.use('/subscription', subscriptionController)

const schoolController = require('./controllers/schoolsController');
 app.use('/schools', schoolController)


app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});