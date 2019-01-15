const express = require('express');
const router = express.Router();

const schools = require('../models/schools');


const showSchool = (req,res,) => res.json(res.locals.school);

router.post('/', schools.create, showSchool);

module.exports = router;