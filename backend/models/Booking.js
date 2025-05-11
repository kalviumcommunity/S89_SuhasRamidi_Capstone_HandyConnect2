const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userData', required: true }, // Ensure 'userData' matches the User model name
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true }, // Make sure to create a Provider model later
  date: { type: Date, required: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
