// routes/admin.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/stats", async (req, res) => {
    try {
      const [rows] = await db.promise().execute(`
        SELECT
          COUNT(*) AS totalUsers,
          SUM(CASE WHEN role = 'Employer' THEN 1 ELSE 0 END) AS employers,
          SUM(CASE WHEN role = 'Jobseeker' THEN 1 ELSE 0 END) AS jobseekers
        FROM users
      `);
  
      res.json({ ...rows[0], reports: 0 });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
module.exports = router;
