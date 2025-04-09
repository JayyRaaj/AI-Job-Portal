// models/Job.js
const db = require('../config/db');

const Job = {
  create: (data, callback) => {
    const sql = `
      INSERT INTO Jobs 
        (employer_id, title, description, location, type, salary_min, salary_max, experience_required, education_required, industry, remote, deadline) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      data.employer_id, data.title, data.description, data.location, data.type,
      data.salary_min, data.salary_max, data.experience_required, data.education_required,
      data.industry, data.remote, data.deadline
    ];
    db.query(sql, values, callback);
  },

  getAll: (callback) => {
    db.query('SELECT * FROM Jobs ORDER BY posted_at DESC', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Jobs WHERE id = ?', [id], callback);
  },

  getByEmployer: (employer_id, callback) => {
    db.query('SELECT * FROM Jobs WHERE employer_id = ? ORDER BY posted_at DESC', [employer_id], callback);
  }
};

module.exports = Job;
