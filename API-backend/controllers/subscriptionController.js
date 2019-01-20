const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const subscription= require('../models/subscription');


const sendSubscriptions = (req,res) => res.json(res.locals.subscriptions);
const sendSubscription = (req,res) => res.json(res.locals.subscription);

router.get('/onlybaker', auth , subscription.getBakery, sendSubscriptions);
router.put('/onlybakerUpdateY', auth , subscription.Update, sendSubscription);

router.get('/onlyThisBaker/:id', subscription.getThisBakery, sendSubscriptions);

module.exports = router;
