const express = require('express');
const { 
  handleGetStudents, 
  handleRegistration,
  handleCreateStudent, 
  handleGetStudent, 
  handleDeleteStudent 
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
router
  .route('/:id')
  .get(handleGetStudent)
  .delete(handleDeleteStudent);

// exporting router
module.exports = router;