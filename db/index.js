'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Handle errors:
Mongoose.connection.on('error', error => {
  console.log("MongoDB connection error: ", error);
});

// Create a Schema that defines the structure for storing user data.
const blogUser = new Mongoose.Schema({
  profileID: String,
  fullName: String,
  profilePic: String
})

// Turn the Schema into a usable model.
let userModel = Mongoose.model('blogUser', blogUser);

module.exports = {
  Mongoose,
  userModel
}
