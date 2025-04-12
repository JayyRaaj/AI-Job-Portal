const db = require("../config/db");

const Reminder = {
  create: (application_id, interview_date, reminder_time, platform, meeting_link, callback) => {
    const sql = `
      INSERT INTO interviewreminders (application_id, interview_date, reminder_time, platform, meeting_link, sent)
      VALUES (?, ?, ?, ?, ?, 0)
    `;
    db.query(sql, [application_id, interview_date, reminder_time, platform, meeting_link], callback);
  },

  getByUser: (callback) => {
    db.query("SELECT * FROM interviewreminders", callback);
  }
};

module.exports = Reminder;
