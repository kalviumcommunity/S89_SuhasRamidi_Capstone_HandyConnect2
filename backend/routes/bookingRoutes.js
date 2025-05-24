const express = require('express');
const { createBooking, getBookings, updateBookingStatus } = require('../controllers/bookingController');
const router = express.Router();

// POST request to create a new booking
 router.post('/bookings', createBooking);

// GET request to fetch all bookings
 router.get('/bookings', getBookings);

// PUT request to update booking status
 router.put('/bookings', updateBookingStatus);

module.exports = router;
