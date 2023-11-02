const { 
  getStudents,
  getStudent,
  createStudent,
  deleteStudent
} = require('../model/studentModel');
// importing the above methods from studentModel


// this function will render the registration page
async function handleRegistration (req, res) {
  try {
    res.status(200).render('home');
  } catch (error) {
    console.error(error);
    res.status(400).render('dynamicPage',{ message: 'Failed to Load the Page'});
  }
}

// this function will handle creation of a student
async function handleCreateStudent (req, res) {
  try {
    const {
      college,
      department,
      email,
      name,
      phone,
      roll,
      year
    } = req.body;
    const datas = await getStudents();
    datas.forEach( (data) => {
      if(data.email == email ||
         data.phone == phone ||
         data.roll == roll) {
          return res.status(409).render('dynamicPage',{ message: 'Duplicate Entry'});
         }
    });
    const result = await createStudent(college,
      department,
      email,
      name,
      phone,
      roll,
      year
    );
    return res.status(201).render('dynamicPage', { message: `Your GID is : ${result}` });
  } catch (err) {
    console.error(err);
    return res.status(400).render('dynamicPage',{ message: 'Failed to Load the Page'});
  }
}

// exporting the above functions
module.exports = {
  handleRegistration,
  handleCreateStudent
}