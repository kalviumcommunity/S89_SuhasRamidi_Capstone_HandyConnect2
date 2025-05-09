// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider' },
  date: Date,
  status: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
