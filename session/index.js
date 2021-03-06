'use strict';
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('../config');
const db = require('../db');

if(process.env.NODE_ENV === 'production') {
  module.exports = session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitionalized: false,
    store: new MongoStore({
      mongooseConnection: db.Mongoose.connection
    })
  })
} else {
  module.exports = session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitionalized: true
  })
}
