'use strict';
const db = require('../db');


// Find a single user based on a key.
let findOne = profileID => {
  return db.userModel.findOne({
    'profileId': profileID
  });
}

// Creates new user and returns that instance.
let createNewUser = profile => {
  return new Promise((resolve, reject)=>{
    let newBlogUser = new db.userModel({
      profileId: profile.id,
      fullName: profile.displayName,
      profilePic: profile.photos[0].value || ''
    });

    newBlogUser.save(error => {
      if(error) {
        reject(error);
      } else {
        resolve(newBlogUser);
      }
    });
  });
}

let findById = id => {
  return new Promise((resolve, reject) => {
    db.userModel.findById(id, (error, user)=> {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}

module.exports = {
  findOne,
  createNewUser,
  findById
}
