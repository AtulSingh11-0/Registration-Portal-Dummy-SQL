const sql = require('mysql2/promise');
// importing mysql2 as sql

const pool = sql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'portal'
});
// creating a pool connection between the database and the server
try {
  if(pool)
    console.log('Database Connected Successfully');
} catch (error) {
  console.error(error);
}
// exporting the pool connection
module.exports = pool;

// // GET all students data
// async function getStudents () {
//   const [result] = await pool.query('SELECT * FROM mrd')
//   return result;
// }

// // GET a single student data
// async function getStudent (id) {
//   const [result] = await pool.query(`SELECT * FROM mrd WHERE id = ?`, [id])
//   return result[0];
// }

// // POST method
// async function createStudent (college, department, email, name, phone, roll, year) {
//   const result = await pool.query(`INSERT INTO mrd (college, department, email, name, phone, roll, year)
//   VALUES (?, ?, ?, ?, ?, ?, ?)`, [college, department, email, name, phone, roll, year]) 
//   return result[0].insertId;
// }
//   // .then(result => console.log('Your GID is >> ', result[0].insertId))
//   // .catch(Error => console.error(Error));

// // DELETE method
// async function deleteStudent (id) {
//   const [result] = await pool.query(`DELETE FROM mrd WHERE id = ?`, [id])
//   return result.affectedRows;
// }

// module.exports = {
//   getStudents,
//   getStudent,
//   createStudent,
//   deleteStudent
// }