// controllers/candidateScreeningController.js
const Screening = require('../models/CandidateScreening');

exports.submitScreening = (req, res) => {
  const data = req.body;
  Screening.submit(data, (err) => {
    if (err) return res.status(500).json({ error: 'Screening failed' });
    res.json({ message: 'Screening submitted' });
  });
};

exports.getScreening = (req, res) => {
  const { applicationId } = req.params;
  Screening.getByApplication(applicationId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch screening' });
    res.json(results);
  });
};
