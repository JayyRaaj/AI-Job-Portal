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

  router.get("/jobseekers", async (req, res) => {
    const [rows] = await db.promise().execute(`SELECT u.id AS user_id, u.name, COUNT(a.id) AS applications_count
FROM users u
LEFT JOIN applications a ON u.id = a.user_id
WHERE u.role = 'Jobseeker'
GROUP BY u.id, u.name;`);
    res.json(rows);
  });
  
  router.get("/employers", async (req, res) => {
    const [rows] = await db.promise().execute(`SELECT u.id AS employer_id, u.name, COUNT(j.id) AS jobs_posted
FROM users u
LEFT JOIN jobs j ON u.id = j.employer_id
WHERE u.role = 'Employer'
GROUP BY u.id, u.name;`);
    res.json(rows);
  });
  
  
module.exports = router;
