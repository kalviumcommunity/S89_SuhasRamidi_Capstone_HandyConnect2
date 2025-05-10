const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bookingRoutes = require('./routes/bookingRoutes'); // Import the booking routes

const app = express();
app.use(express.json()); // Needed to parse JSON request bodies

app.use('/api', bookingRoutes); // Ensure this matches the route you want, like /api/bookings

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
