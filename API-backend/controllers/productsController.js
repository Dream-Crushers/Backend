const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const products= require('../models/products');

const sendProducts = (req,res,) => res.json(res.locals.products);
const sendProduct  = (req,res) => res.json(res.locals.product);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', products.getAll, sendProducts);
router.get('/baker/:id', products.getBakerProduct, sendProducts);
router.get('/onlybaker', auth , products.getUserProduct, sendProduct);
router.post('/onlybaker', auth ,products.create, sendProduct);
// router.put('/:id', products.update, sendProduct);
router.delete('/:id', products.delete, sendSuccess);

module.exports = router;

