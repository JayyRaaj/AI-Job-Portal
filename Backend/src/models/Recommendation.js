// models/Recommendation.js
const db = require('../config/db');

const Recommendation = {
  recommendJob: (user_id, job_id, reason, callback) => {
    const sql = `
      INSERT INTO JobRecommendations (user_id, job_id, reason, recommended_at)
      VALUES (?, ?, ?, NOW())
    `;
    db.query(sql, [user_id, job_id, reason], callback);
  },

  getJobRecommendations: (user_id, callback) => {
    db.query(`
      SELECT jr.*, j.title, j.location
      FROM JobRecommendations jr
      JOIN Jobs j ON jr.job_id = j.id
      WHERE jr.user_id = ?
      ORDER BY recommended_at DESC
    `, [user_id], callback);
  },

  recommendCourse: (user_id, course_id, recommended_by, callback) => {
    const sql = `
      INSERT INTO CourseRecommendations (user_id, course_id, recommended_by, recommended_at)
      VALUES (?, ?, ?, NOW())
    `;
    db.query(sql, [user_id, course_id, recommended_by], callback);
  },

  getCourseRecommendations: (user_id, callback) => {
    db.query(`
      SELECT cr.*, c.title, c.link, c.provider
      FROM CourseRecommendations cr
      JOIN Courses c ON cr.course_id = c.id
      WHERE cr.user_id = ?
      ORDER BY recommended_at DESC
    `, [user_id], callback);
  }
};

module.exports = Recommendation;
