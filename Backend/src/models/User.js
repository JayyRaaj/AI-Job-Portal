// models/User.js
const db = require('../config/db');

const User = {
  create: (user, callback) => {
    const { name, email, password, role } = user;
    const sql = 'INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, password, role], callback);
  },

  findByEmail: (email, callback) => {
    db.query('SELECT * FROM Users WHERE email = ?', [email], callback);
  },

  findById: (id, callback) => {
    db.query('SELECT * FROM Users WHERE id = ?', [id], callback);
  }
};

module.exports = User;
