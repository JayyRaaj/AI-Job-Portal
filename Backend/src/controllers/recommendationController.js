// controllers/recommendationController.js
const Recommendation = require('../models/Recommendation');

exports.recommendJob = (req, res) => {
  const { user_id, job_id, reason } = req.body;
  Recommendation.recommendJob(user_id, job_id, reason, (err) => {
    if (err) return res.status(500).json({ error: 'Job recommendation failed' });
    res.json({ message: 'Job recommended' });
  });
};

exports.getJobRecommendations = (req, res) => {
  const { userId } = req.params;
  Recommendation.getJobRecommendations(userId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Fetch failed' });
    res.json(results);
  });
};

exports.recommendCourse = (req, res) => {
  const { user_id, course_id, recommended_by } = req.body;
  Recommendation.recommendCourse(user_id, course_id, recommended_by, (err) => {
    if (err) return res.status(500).json({ error: 'Course recommendation failed' });
    res.json({ message: 'Course recommended' });
  });
};

exports.getCourseRecommendations = (req, res) => {
  const { userId } = req.params;
  Recommendation.getCourseRecommendations(userId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Fetch failed' });
    res.json(results);
  });
};
