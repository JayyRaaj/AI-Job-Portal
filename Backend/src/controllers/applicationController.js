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
