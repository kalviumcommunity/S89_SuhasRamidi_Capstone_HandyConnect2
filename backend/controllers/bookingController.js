const mongoose = require('mongoose');
const Booking = require( '../models/Booking' );

// Create a new booking
const  createBooking = async (req, res) => {
  try {
    const { userId, providerId, date, status } = req.body;

    // Validate required fields
    if ( !userId || !providerId || !date || !status ) {
      return res.status(400).json({ message: 'All fields are required (userId, providerId, date, status)' });
    }

    // Validate status value
    const validStatuses = ['pending', 'confirmed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message:  'Invalid status value' });
    }

    const newBooking = new Booking({ userId, providerId, date, status });
    await newBooking.save();
    res.status(201).json({ message:'Booking created successfully', booking: newBooking });
  } catch (error) {
     console.error('Error creating booking:', error);
     res.status(500).json({ message: 'Server error while creating booking' });
  }
};

// Get all bookings
const  getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find() // No populate temporarily
    // .populate('userId', 'name email') // Uncomment after fixing models
    // .populate('providerId', 'name serviceType'); // Uncomment after creating Provider model
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Server error while fetching bookings' });
  }
};

// Update booking status
const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId, status } = req.body;

    // Validate required fields
    if (!bookingId || !status) {
      return res.status(400).json({ message: 'Booking ID and status are required' });
    }

    // Validate status value
    const validStatuses = ['pending', 'confirmed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

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
    console.error('Error updating booking status:', error);
    res.status(500).json({ message: 'Server error while updating booking status' });
  }
};

// Update a booking (full update, e.g., date, provider, status)
const updateBooking = async (req, res) => {
  try {
    // Safely extract bookingId from body or params
    const bookingId = (req.body && req.body.bookingId) || (req.params && req.params.bookingId);
    const { userId, providerId, date, status } = req.body || {};
    if (!bookingId) {
      return res.status(400).json({ message: 'Booking ID is required' });
    }
    // Only update provided fields
    const updateFields = {};
    if (userId) updateFields.userId = userId;
    if (providerId) updateFields.providerId = providerId;
    if (date) updateFields.date = date;
    if (status) {
      const validStatuses = ['pending', 'confirmed', 'cancelled'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
      }
      updateFields.status = status;
    }
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      updateFields,
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking updated', booking: updatedBooking });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Server error while updating booking' });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    if (!bookingId || !mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({ message: 'Valid Booking ID is required' });
    }

    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking deleted', booking: deletedBooking });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error while deleting booking' });
  }
};

module.exports = { createBooking, getBookings, updateBookingStatus, updateBooking, deleteBooking };
