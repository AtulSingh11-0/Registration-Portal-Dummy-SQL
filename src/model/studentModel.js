const pool = require('../../config/database')
let connection;
// importing the pool connection from database


// query to GET all students data
async function getStudents () {
  const [result] = await pool.query('SELECT email, phone, roll FROM mrd');
  return result;
  // result.forEach((res) => {
  //   console.log(`
  //     email: ${res.email}
  //     phone: ${res.phone}
  //     roll: ${res.roll}
  //     \n
  //   `);
  // });
}

// getStudents();

// query to GET a single student data
async function getStudent (id) {
  const result = await pool.query(`SELECT * FROM mrd WHERE id = ?`, [id])
  return result[0];
}

// query to POST student data
async function createStudent (college, department, email, name, phone, roll, year) {
  try {
    // get a connection from the connection pool
    connection = await pool.getConnection();
    await connection.beginTransaction();
    
    const result = await connection.query(`
    INSERT INTO mrd (college, department, email, name, phone, roll, year)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [college, department, email, name, phone, roll, year]) 

    // commit the transaction if the query was successful
    await connection.commit();
    return result[0].insertId;
  } catch (error) {
    
    // roll back the transaction and handle the error
    console.error(error);
    if(connection)
      await connection.rollback();
  }
}

// query to DELETE student data
async function deleteStudent (id) {
  const result = await pool.query(`DELETE FROM mrd WHERE id = ?`, [id])
  return result[0].affectedRows;
}

// exporting the above functions
module.exports = {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent
}