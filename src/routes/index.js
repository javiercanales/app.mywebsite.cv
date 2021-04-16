'use strict'

// Load the express.js module
var express = require('express');

// Load the controllers
var emailController = require('../controllers/emailController');
 
// Call the router
var api = express.Router();
 
// Send email (contact)
api.get('/example', emailController.example);
api.post('/send-email', emailController.sendEmail);

// Export the config
module.exports = api;