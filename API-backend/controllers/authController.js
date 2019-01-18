const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const bakeries= require('../models/bakeries');
const subscription = require('../models/subscription');

const auth = require("../middleware/auth");

const sendBakeries = (req,res,) => res.json(res.locals.bakery);


router.get('/', bakeries.getAll, sendBakeries);
router.get('/bakeryInfo',auth, bakeries.getInfo, sendBakeries);
// router.post('/', bakeries.create, sendBakeries);


router.get("/testauth", auth, (req, res) => {
  res.send("authenticated");
});

router.post("/auth", bakeries.findEmail, bakeries.login, (req, res) => {
  if (!res.user) {
    res.status(400).send("invalid email or password");
  } else {
    const { email, title, id } = req.user;

    const token = jwt.sign({ email, title, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

router.post("/bakery", bakeries.findEmail, bakeries.create,subscription.createQ,subscription.createY, (req, res) => {
// return user role 
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {

 const { email, title, id } = req.user;

    const token = jwt.sign({ email, title, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

module.exports = router;