// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/', jobController.postJob);
router.get('/', jobController.getJobs);
router.get('/:jobId', jobController.getJob);
router.get('/employer/:employerId', jobController.getEmployerJobs);

module.exports = router;
