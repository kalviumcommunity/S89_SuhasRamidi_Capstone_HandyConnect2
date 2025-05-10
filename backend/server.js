const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(express.json());

// Use booking routes
app.use('/api', bookingRoutes);

app.get("/", (req, res) => {
    res.send("HandyConnect backend is running!");
});
mongoose.connect(process.env.MONGO_URL)
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
