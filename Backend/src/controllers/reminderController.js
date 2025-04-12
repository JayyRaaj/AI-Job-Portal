const db = require("../config/db");

exports.getByEmployer = (req, res) => {
  const employerId = req.params.id;
  const query = `
    SELECT ir.interview_date, u.name AS applicant_name
    FROM interviewreminders ir
    JOIN applications a ON ir.application_id = a.id
    JOIN users u ON a.user_id = u.id
    JOIN jobs j ON a.job_id = j.id
    WHERE j.employer_id = ?
    ORDER BY ir.interview_date DESC
  `;
  db.query(query, [employerId], (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(results);
  });
};
