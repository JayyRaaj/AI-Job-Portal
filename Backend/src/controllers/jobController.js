// controllers/jobController.js
const Job = require('../models/Job');

exports.postJob = (req, res) => {
  const jobData = req.body;
  Job.create(jobData, (err, result) => {
    if (err) return res.status(500).json({ error: 'Job posting failed' });
    res.status(201).json({ message: 'Job posted', jobId: result.insertId });
  });
};

exports.getJobs = (req, res) => {
  Job.getAll((err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch jobs' });
    res.json(results);
  });
};

exports.getJob = (req, res) => {
  const jobId = req.params.jobId;
  Job.getById(jobId, (err, result) => {
    if (err || result.length === 0) return res.status(404).json({ error: 'Job not found' });
    res.json(result[0]);
  });
};

exports.getEmployerJobs = (req, res) => {
  const employerId = req.params.employerId;
  Job.getByEmployer(employerId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch employer jobs' });
    res.json(results);
  });
};
