const express = require('express');
const router = express.Router();

const bakeries= require('../models/bakeries');

const sendBakeries = (req,res,) => res.json(res.locals.bakery);


router.get('/', bakeries.getAll, sendBakeries);
router.post('/', bakeries.create, sendBakeries);


module.exports = router;