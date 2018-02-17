'use strict';
const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;
const h = require('../helpers');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    h.findById(id)
      .then(user => done(null, user))
      .catch(error => console.log("Error when deserializing user.", console.log(error)));
  });

  let authProcessor = (accessToken, refreshToken, profile, done) => {
    console.log(profile.id);
    h.findOne(profile.id)
    .then(result => {
      if(result) {
        console.log(JSON.stringify(result));
        done(null, result);
      } else {
        // Create a new user
        h.createNewUser(profile)
          .then(newBlogUser => done(null, newBlogUser))
          .catch(error=>console.log("Error creating a new User.", error))
      }
    })
  }
  passport.use(new FacebookStrategy(config.fb, authProcessor));
}
