// routes/marketInsightRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/marketInsightController');

router.post('/', controller.createInsight);
router.get('/', controller.getInsights);
router.get('/:id', controller.getInsight);

module.exports = router;
