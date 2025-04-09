// routes/candidateScreeningRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/candidateScreeningController');

router.post('/', controller.submitScreening);
router.get('/:applicationId', controller.getScreening);

module.exports = router;
