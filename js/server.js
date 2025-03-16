// Importing express, mySQL and body Parser
// -------------------------------------------------

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Create Varible to create mySQL database
// -------------------------------------------------

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
});

