'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Handle errors:
Mongoose.connection.on('error', error => {
  console.log("MongoDB connection error: ", error);
});

module.exports = {
  Mongoose
}
