const { 
  checkDuplicate,
  createStudent
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
  flag = true; // flag to check for duplicate entries
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
    const datas = await checkDuplicate();
    datas.forEach( (data) => {
      if(data.email == email ||
         data.phone == phone ||
         data.roll == roll) {
          flag = false; // if the if statement is executed then it will be declared as false
          return res.status(409).render('dynamicPage',{ message: 'Duplicate Entry'});
        }
    });

    // if flag is true then only the students data will pe POSTed into the db
    if(flag) { 
      const result = await createStudent(college,
        department,
        email,
        name,
        phone,
        roll,
        year
      );
      return res.status(201).render('dynamicPage', { message: `Your GID is : ${result}` });
    }
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