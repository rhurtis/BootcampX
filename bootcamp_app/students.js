const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();

// pool.query('SELECT * FROM students' , (err, res) => {
//   console.log(err, res) // Hello World!
//   pool.end()
// })

// Parameterizing the data

// data I control
const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

// data from the user
let userInput = process.argv.slice(2);
const cohortName = userInput[0];
const limit = userInput[1] || 5;
const values = [`%${cohortName}`, limit];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));