// routes/interviewReminderRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/interviewReminderController');

router.post('/', controller.createReminder);
router.get('/:userId', controller.getUserReminders);

module.exports = router;
