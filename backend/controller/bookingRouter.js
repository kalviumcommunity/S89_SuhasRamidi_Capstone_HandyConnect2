const express = require("express");
const bookingRouter = express.Router();

const Booking = require("../models/bookingSchema");

// GET route for booking
bookingRouter.get('/booking', async (req, res) => {
    try {
        console.log("Fetching bookings..."); // Debugging log
        const bookings = await Booking.find();

        if (bookings.length === 0) {
            console.log("No bookings found."); // Debugging log
            return res.status(404).send({ msg: "No bookings available" });
        }

        res.status(200).send(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error); // Enhanced error log
        res.status(500).send({ msg: "Something went wrong with booking" });
    }
});

// POST route to create a new booking
bookingRouter.post('/postbooking', async (req, res) => {
    try {
        const { user, service, date, time, status } = req.body;

        if (!user || !service || !date || !time || !status) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newBooking = new Booking({
            user,
            service,
            date,
            time,
            status
        });

        await newBooking.save();

        console.log("New booking created:", newBooking); // Debugging log
        res.status(201).send({ message: "Booking created successfully!", booking: newBooking });
    } catch (error) {
        console.error("Error creating booking:", error); // Enhanced error log
        res.status(500).send({ message: "Error creating booking", error });
    }
});

module.exports = bookingRouter;
