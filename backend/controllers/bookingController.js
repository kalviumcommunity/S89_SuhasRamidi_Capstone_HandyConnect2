const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { userId, providerId, date, status } = req.body;

    const newBooking = new Booking({ userId, providerId, date, status });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('userId', 'name email') // Populate the user details
      .populate('providerId', 'name serviceType'); // Populate the provider details
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

// Update booking status
const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId, status } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking status updated', booking: updatedBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status', error });
  }
};

module.exports = { createBooking, getBookings, updateBookingStatus };
