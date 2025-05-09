const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    service: {
        type: String, // or use ObjectId if referencing Service model
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
