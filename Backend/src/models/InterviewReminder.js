// models/InterviewReminder.js
const db = require('../config/db');

const InterviewReminder = {
  create: (application_id, interview_date, reminder_time, platform, meeting_link, callback) => {
    const sql = `
      INSERT INTO InterviewReminders 
        (application_id, interview_date, reminder_time, platform, meeting_link, sent)
      VALUES (?, ?, ?, ?, ?, FALSE)
    `;
    db.query(sql, [application_id, interview_date, reminder_time, platform, meeting_link], callback);
  },

  getByUser: (callback) => {
    const sql = `
      SELECT ir.*, j.title, a.user_id 
      FROM InterviewReminders ir
      JOIN Applications a ON ir.application_id = a.id
      JOIN Jobs j ON a.job_id = j.id
      ORDER BY interview_date ASC
    `;
    db.query(sql,  callback);
  },

  markAsSent: (id, callback) => {
    db.query('UPDATE InterviewReminders SET sent = TRUE WHERE id = ?', [id], callback);
  }
};

module.exports = InterviewReminder;
