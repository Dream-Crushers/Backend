const express = require('express');
const router = express.Router();

const schools = require('../models/schools');


const showSchool = (req,res,) => res.json(res.locals.school);
const showSchools = (req,res,) => res.json(res.locals.schools);

router.post('/', schools.create, showSchool);
router.get('/', schools.get, showSchools);

module.exports = router;