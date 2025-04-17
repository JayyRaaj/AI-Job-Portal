// controllers/userController.js
const User = require('../models/User');

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';


exports.register = (req, res) => {
  const { name, email, password, role } = req.body;
  User.create({ name, email, password, role }, (err, result) => {
    if (err) return res.status(500).json({ error: 'Registration failed' });
    res.status(201).json({ message: 'User registered', userId: result.insertId });
  });
};


exports.secureFunction = (req, res) => {
    res.json({ message: 'You accessed protected data', user: req.user });
  };
  

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (err, results) => {
      if (err || results.length === 0 || results[0].password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const user = results[0];
      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, );
  
      res.status(200).json({
        message: 'Login successful',
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
        token
        
      });
    });
  };

  exports.resetPassword = (req, res) => {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ error: "Email and new password required" });
    }
  
    User.findByEmail(email, (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
  
      User.updatePassword(email, newPassword, (err2, updateResult) => {
        if (err2) {
          return res.status(500).json({ error: "Failed to update password" });
        }
        res.status(200).json({ message: "Password reset successful" });
      });
    });
  };
  