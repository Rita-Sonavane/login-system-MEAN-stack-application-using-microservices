const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  // Add other user fields as needed
});

const User = mongoose.model('User', userSchema);
module.exports = User;
