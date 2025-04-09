// controllers/resumeController.js
const Resume = require('../models/Resume');

exports.uploadResume = (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const userId = req.params.userId;
  const filePath = req.file.path;
  const originalName = req.file.originalname;

  Resume.upload(userId, filePath, originalName, (err, result) => {
    if (err) return res.status(500).json({ error: 'Upload failed' });
    res.status(201).json({ message: 'Resume uploaded successfully' });
  });
};

exports.getResume = (req, res) => {
  const userId = req.params.userId;
  Resume.getByUserId(userId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch resume' });
    if (results.length === 0) return res.status(404).json({ message: 'No resume found' });
    res.json(results[0]);
  });
};
