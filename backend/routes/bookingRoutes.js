const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// PUT request to update booking status
router.put('/bookings', async (req, res) => {
  try {
    const { bookingId, status } = req.body;

    if (!bookingId || !status) {
      return res.status(400).json({ message: "Booking ID and status are required" });
    }

    // Try to find and update the booking by ID
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: status },
      { new: true } // Return the updated document
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
