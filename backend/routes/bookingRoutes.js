const express = require('express');
const { createBooking, getBookings, updateBookingStatus, updateBooking, deleteBooking } = require('../controllers/bookingController');
const router = express.Router();

// POST request to create a new booking
router.post('/bookings', createBooking);

// GET request to fetch all bookings
router.get('/bookings', getBookings);

// PUT request to update booking status
router.put('/bookings/:bookingId', updateBookingStatus);

// UPDATE request to update a booking (full update)
router.put('/bookings/update/:bookingId', updateBooking);

// DELETE request to delete a booking
router.delete('/bookings/:bookingId', deleteBooking);

module.exports = router;





