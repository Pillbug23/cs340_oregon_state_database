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
var app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        = 4198;                 // Set a port number at the top so it's easy to change in the future

// Handlebars
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// Cors to read data
var cors = require('cors')
app.use(cors())

/*
ROUTES
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

  app.post("/student", (req, res) => {
    console.log(req.body)
    const { studentid, name, email, gender, company, previousMajor, graduated } = req.body;
    const q = `INSERT INTO Students (studentID, studentName, studentEmail, studentGender, companyID, previousMajor, graduated) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [studentid, name, email, gender, company, previousMajor, graduated];
    console.log(values)

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

app.delete('/student/:studentID', (req, res) => {
  const studentID = req.params.studentID;
  const q = 'DELETE FROM Students WHERE studentID = ?';
  console.log(studentID)

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

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});