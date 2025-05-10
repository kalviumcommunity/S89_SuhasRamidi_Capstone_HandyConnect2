const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider' },
  date: Date,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], required: true }, // Validation added for status
});

module.exports = mongoose.model('Booking', bookingSchema);
