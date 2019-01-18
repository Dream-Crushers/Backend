const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const subscription= require('../models/subscription');


const sendSubscriptions = (req,res) => res.json(res.locals.subscriptions);
const sendSubscription = (req,res) => res.json(res.locals.subscription);

router.get('/onlybaker', auth , subscription.getBakery, sendSubscriptions);
router.put('/onlybakerUpdateY', auth , subscription.UpdateY, sendSubscription);

router.get('/onlyThisBaker', subscription.getThisBakery, sendSubscriptions);

module.exports = router;
