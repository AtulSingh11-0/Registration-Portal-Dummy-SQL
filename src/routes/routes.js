const express = require('express');
const { 
  handleRegistration,
  handleCreateStudent, 
} = require('../controllers/studentController');
// importing the controller methods from studentController

const router = express.Router();

// route for '/' will handle GET method
router
  .route('/')
  .get(handleRegistration)

router
  .route('/registration-successful')  
  .post(handleCreateStudent);

// route for 'registration/:id' will handle GET and DELETE methods

// exporting router
module.exports = router;