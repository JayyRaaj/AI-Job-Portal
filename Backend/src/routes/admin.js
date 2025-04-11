const express = require('express');
const router = express.Router();
const { getAdminStats } = require('../controllers/adminController');
const { authenticateAdmin } = require('../middleware/auth');

router.get('/stats', authenticateAdmin, getAdminStats);

module.exports = router;
