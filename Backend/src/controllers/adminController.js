const db = require('../db');

const getAdminStats = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT
        COUNT(*) AS totalusers,
        SUM(CASE WHEN role = 'Employer' THEN 1 ELSE 0 END) AS employers,
        SUM(CASE WHEN role = 'Jobseeker' THEN 1 ELSE 0 END) AS jobseekers
      FROM users
    `);

    const reportCount = await db.query(`SELECT COUNT(*) AS reports FROM reports`);

    res.json({
      totalUsers: parseInt(result.rows[0].totalusers),
      employers: parseInt(result.rows[0].employers),
      jobseekers: parseInt(result.rows[0].jobseekers),
      reports: parseInt(reportCount.rows[0].reports),
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

module.exports = { getAdminStats };
