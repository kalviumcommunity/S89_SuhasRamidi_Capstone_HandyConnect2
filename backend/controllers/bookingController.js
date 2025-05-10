const Booking = require('../models/Booking');

// POST: Create a new booking
const createBooking = async (req, res) => {
  try {
    const { userId, providerId, date, status } = req.body;

    // Check if all required fields are provided
    if (!userId || !providerId || !date || !status) {
      return res.status(400).json({ message: 'All fields are required (userId, providerId, date, status)' });
    }

    // Create a new booking document
    const newBooking = new Booking({ userId, providerId, date, status });

    // Save the booking to the database
    await newBooking.save();

    // Respond with the created booking
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// GET: Get all bookings
const getBookings = async (req, res) => {
  try {
    // Fetch all bookings from the database and populate related user and provider details
    const bookings = await Booking.find()
      .populate('userId', 'name email') // Populate the user details
      .populate('providerId', 'name serviceType'); // Populate the provider details
    
    // Send the list of bookings as the response
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

// PUT: Update booking status
const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId, status } = req.body;

    // Check if both bookingId and status are provided
    if (!bookingId || !status) {
      return res.status(400).json({ message: 'Booking ID and status are required' });
    }

    // Update the booking status by bookingId
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true } // Return the updated document
    );

    // If the booking isn't found, send a 404 error
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Send the updated booking as the response
    res.status(200).json({ message: 'Booking status updated', booking: updatedBooking });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ message: 'Error updating booking status', error });
  }
};

module.exports = { createBooking, getBookings, updateBookingStatus };
