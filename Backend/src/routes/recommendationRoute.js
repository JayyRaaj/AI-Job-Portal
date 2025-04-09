// routes/recommendationRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/recommendationController');

router.post('/jobs', controller.recommendJob);
router.get('/jobs/:userId', controller.getJobRecommendations);

router.post('/courses', controller.recommendCourse);
router.get('/courses/:userId', controller.getCourseRecommendations);

module.exports = router;
