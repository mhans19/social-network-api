// Dependencies
const mongoose = require('mongoose');
const express = require('express');
// Port
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use Routes
app.use(require('./routes'));
// Define Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Use this to log mongo queries being executed!
mongoose.set('debug', true);
// Open Connection
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
