// controllers/applicationController.js
const Application = require('../models/Application');

exports.applyJob = (req, res) => {
  const data = req.body;
  Application.apply(data, (err, result) => {
    if (err) return res.status(500).json({ error: 'Application failed' });
    res.status(201).json({ message: 'Application submitted' });
  });
};

exports.getUserApplications = (req, res) => {
  Application.getByUser(req.params.userId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Fetch failed' });
    res.json(results);
  });
};

exports.getJobApplications = (req, res) => {
  Application.getByJob(req.params.jobId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Fetch failed' });
    res.json(results);
  });
};

exports.updateApplicationStatus = (req, res) => {
  const { applicationId } = req.params;
  const { status } = req.body;
  Application.updateStatus(applicationId, status, (err) => {
    if (err) return res.status(500).json({ error: 'Status update failed' });
    res.json({ message: 'Status updated' });
  });
};

exports.getEmployerApplications = (req, res) => {
  const employerId = req.params.employerId;
  const sql = `
    SELECT a.id, a.job_id, a.user_id, a.status, u.name AS applicant_name, j.title AS job_title
    FROM applications a
    JOIN users u ON a.user_id = u.id
    JOIN jobs j ON a.job_id = j.id
    WHERE j.employer_id = ?
    ORDER BY a.applied_at DESC
  `;
  const db = require('../config/db');
  db.query(sql, [employerId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Fetch failed' });
    res.json(results);
  });
};

