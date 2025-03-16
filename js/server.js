// Importing express, mySQL and body Parser
// -------------------------------------------------

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Create Varible to connect to the mySQL database
// -------------------------------------------------

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
});

// If an error occurs while to connecting to the mySQL database or successful connection
// -------------------------------------------------

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// App Post to mySQL database
// -------------------------------------------------

app.post('/api/register', (req, res) => {
    const { firstName, lastName, email, grade, school } = req.body;
    const sql = 'INSERT INTO students (first_name, last_name, email, grade, school) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, grade, school], (err, result) => {
        if (err) throw err;
        res.json({message: 'Registation successful!' });
    });
});

// App Get information from Database
// -------------------------------------------------

app.get('/api/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
        })
});

app.listen(3000, () => console.log("Server is on and poppin!"));




