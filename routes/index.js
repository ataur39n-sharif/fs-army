const express = require('express');
const CountController = require('../controllers/count.controller');

const router = express.Router();

router.get('/count', CountController.count)


module.exports = router