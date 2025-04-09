// models/CandidateScreening.js
const db = require('../config/db');

const CandidateScreening = {
  submit: (data, callback) => {
    const sql = `
      INSERT INTO CandidateScreenings 
        (application_id, score, remarks, evaluation_criteria, screened_by, screened_at)
      VALUES (?, ?, ?, ?, ?, NOW())
    `;
    db.query(sql, [
      data.application_id,
      data.score,
      data.remarks,
      data.evaluation_criteria,
      data.screened_by
    ], callback);
  },

  getByApplication: (application_id, callback) => {
    db.query(`
      SELECT cs.*, u.name AS screened_by_name
      FROM CandidateScreenings cs
      JOIN Users u ON cs.screened_by = u.id
      WHERE cs.application_id = ?
    `, [application_id], callback);
  }
};

module.exports = CandidateScreening;
