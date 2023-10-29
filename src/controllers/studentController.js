const { 
  getStudents,
  getStudent,
  createStudent,
  deleteStudent
} = require('../model/studentModel');
// importing the above methods from studentModel


// this function will handle get all student data
async function handleGetStudents (req, res) {
  try {
    const result = await getStudents();
    if(!result)
      return res.status(404).render('no-records');
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}
async function handleRegistration (req, res) {
  res.render('home');
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
    const result = await createStudent(college,
      department,
      email,
      name,
      phone,
      roll,
      year
    );
    return res.status(201).render('registration-successful', { result });
    // return res.status(201).send(`Your GID is : ${result}`);
  } catch (err) {
    return res.status(400).send(err);
  }
}

// this function will handle get student data by its id
async function handleGetStudent (req, res) {
  try {
    const id = req.params.id;
    const [result] = await getStudent(id);
    if (!result)
      return res.status(404).render('no-records');
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

// this function will handle deletion of student data by id
async function handleDeleteStudent (req, res) {
  try {
    const id = req.params.id;
    const studentData = await getStudent(id);
    const result = await deleteStudent(id);
    if (!result)
      return res.status(404).render('no-records');
    return res.status(200).render('record-deleted', { data: studentData });
  } catch (err) {
    return res.status(500).send(err);
  }
}

// exporting the above functions
module.exports = {
  handleGetStudents,
  handleRegistration,
  handleGetStudent,
  handleCreateStudent,
  handleDeleteStudent
}