// App.js
/*
    SETUP
*/
var mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'classmysql.engr.oregonstate.edu',
  user: 'cs340_lyp',
  password: '1250',
  database: 'cs340_lyp'
});

var express = require('express');   // We are using the express library for the web server
var app = express();            // We need to instantiate an express object to interact with the server in our code
PORT = 4283;                 // Set a port number at the top so it's easy to change in the future

// Handlebars
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({ extname: ".hbs" }));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Cors to read data
var cors = require('cors')
app.use(cors())

/*
ROUTES
*/

/*
GET ROUTES
*/
// Gets student data
app.get('/student', (req, res) => {
  const query = 'SELECT * FROM Students';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Gets company data
app.get('/company', (req, res) => {
  const query = 'SELECT * FROM Companies';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Gets course data
app.get('/course', (req, res) => {
  const query = 'SELECT * FROM Courses';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Gets review data
app.get('/review', (req, res) => {
  const query = 'SELECT * FROM Reviews';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Gets student data
app.get('/earning', (req, res) => {
  const query = 'SELECT * FROM FinancialEarnings';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Post routes
app.post("/student", (req, res) => {
  console.log(req.body)
  const { studentid, name, email, gender, company, previousMajor, graduated } = req.body;
  const q = `INSERT INTO Students (studentID, studentName, studentEmail, studentGender, companyID, previousMajor, graduated) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [studentid, name, email, gender, company, previousMajor, graduated];

  pool.query(q, values, (err) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error executing query');
      return;
    }
    console.log('Student added successfully');
    res.status(200).json({ message: 'Student added successfully' });
  });
});

app.post("/review", (req, res) => {
  const { courseid, unit, feedback } = req.body;
  const q = `INSERT INTO Reviews (courseID, courseRating, courseReview) VALUES (?, ?, ?)`;
  const values = [courseid, unit, feedback];

  pool.query(q, values, (err) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error executing query');
      return;
    }
    console.log('Student added successfully');
    res.status(200).json({ message: 'Student added successfully' });
  });
});

app.post("/earning", (req, res) => {
  const { prev, tuition, loan, misc, interest, studentID, current } = req.body;
  const q = `INSERT INTO FinancialEarnings (priorSalary, tuitionCost, studentLoan,
    miscExpense,loanInterest,studentID, newSalary) VALUES (?, ?, ?, ? ,? ,? ,?)`;
  const values = [prev, tuition, loan, misc, interest, studentID, current];
  console.log(studentID)
  pool.query(q, values, (err) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error executing query');
      return;
    }
    console.log('Earning added successfully');
    res.status(200).json({ message: 'Earning added successfully' });
  });
});




/*
UPDATE Routes
*/
// Update Student
app.put("/student/:studentID", (req, res) => {
  const { name, email, gender, company, previousMajor, graduated } = req.body;
  const studentID = req.params.studentID;

  const q = `UPDATE Students SET studentName = ?, studentEmail = ?, studentGender = ?, companyID = ?, 
             previousMajor = ?, graduated = ? WHERE studentID = ?`;

  pool.query(q, [name, email, gender, company, previousMajor, graduated, studentID], (err, result) => {
    if (err) {
      console.error('Error updating student:', err);
      res.status(500).json({ error: 'Failed to update student' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send(`Could not locate student with studentID of ${studentID}.`);
      return;
    }
    console.log('Student updated successfully');
    res.status(200).json({ message: 'Student updated successfully' });
  });
});

app.put("/review/:reviewID", (req, res) => {
  const { courseid, unit, feedback } = req.body;
  const reviewID = req.params.reviewID;
  const converted_reviewID = parseInt(reviewID, 10)

  const q = `UPDATE Reviews SET courseID = ?, courseRating = ?, courseReview = ? WHERE reviewID = ?`;

  pool.query(q, [courseid, unit, feedback, converted_reviewID], (err, result) => {
    if (err) {
      console.error('Error updating student:', err);
      res.status(500).json({ error: 'Failed to update student' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send(`Could not locate student with studentID of ${studentID}.`);
      return;
    }
    console.log('Review updated successfully');
    res.status(200).json({ message: 'Student updated successfully' });
  });
});

app.put("/earning/:earningID", (req, res) => {
  const { prev, tuition, loan, misc, interest, studentID, current } = req.body;
  const q = `UPDATE FinancialEarnings SET priorSalary = ?, tuitionCost = ?, studentLoan = ?,
  miscExpense = ?,loanInterest = ?,studentID =?, newSalary =? WHERE earningsID = ?`;

  const earningID = req.params.earningID;
  pool.query(q, [prev, tuition, loan, misc, interest, studentID, current, earningID], (err, result) => {
    if (err) {
      
      console.error('Error updating earning:', err);
      res.status(500).json({ error: 'Failed to update earning' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send(`Could not locate earning with earning of ${earningID}.`);
      return;
    }
    console.log('Earning updated successfully');
    
    res.status(200).json({ message: 'Earning updated successfully' });
  });
});

/*
DELETE ROUTES
*/
//Delete student//
app.delete('/student/:studentID', (req, res) => {
  const studentID = req.params.studentID;
  const q = 'DELETE FROM Students WHERE studentID = ?';

  pool.query(q, [studentID], (err) => {
    if (err) {
      console.error('Error deleting student:', err);
      res.status(500).json({ error: 'Failed to delete student' });
      return;
    }
    console.log('Student deleted successfully');
    res.sendStatus(204); // No content - deletion successful
  });
});

app.delete('/review/:reviewID', (req, res) => {
  const reviewID = req.params.reviewID;
  const q = 'DELETE FROM Reviews WHERE reviewID = ?';

  pool.query(q, [reviewID], (err) => {
    if (err) {
      console.error('Error deleting student:', err);
      res.status(500).json({ error: 'Failed to delete student' });
      return;
    }
    console.log('Student deleted successfully');
    res.sendStatus(204); // No content - deletion successful
  });
});

app.delete('/earning/:earningID', (req, res) => {
  const earningID = req.params.earningID;
  const q = 'DELETE FROM FinancialEarnings WHERE earningsID = ?';

  pool.query(q, [earningID], (err) => {
    if (err) {
      console.error('Error deleting earning:', err);
      res.status(500).json({ error: 'Failed to delete earning' });
      return;
    }
    console.log('Earning deleted successfully');
    res.sendStatus(204); // No content - deletion successful
  });
});



/*
    LISTENER
*/
app.listen(PORT, function () {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});