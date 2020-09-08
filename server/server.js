/**
 * This server will do crud running actual SQL queries
 */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const GET = require('./queries/GET');
const POST = require('./queries/POST');
const UPDATE = require('./queries/UPDATE');
const DELETE = require('./queries/UPDATE');


const app = express();
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});

/* Middleware */
app.use(bodyParser.json());
app.use(cors());


/* Routes */

// Create
app.post('/', function(req, res, next){
  connection.connect();

  connection.query(POST(req.body.id), function(err, rows, fields){
    if (err) throw err;
    console.log(rows);
    console.log(fields);
  });
  connection.end();

  res.status(200).json({"text": "pos"});
});

// Read
app.get('/', function( req, res, next ){
  connection.connect();

  connection.query(GET, function(err, rows, fields){
    if (err) throw err;
    console.log(rows);
    console.log(fields);
  });
  connection.end();

  res.status(200).json({"text": "gottem"});
});

// Update
app.set('/', function( req, res, next ){
  connection.connect();

  connection.query(UPDATE(req.body.id), function(err, rows, fields){
    if (err) throw err;
    console.log(rows);
    console.log(fields);
  });
  connection.end();

  res.status(200).json({"text": "set"});
});

// Delete
app.delete('/', function( req, res, next ){
  connection.connect();

  connection.query(DELETE(req.body.id), function(err, rows, fields){
    if (err) throw err;
    console.log(rows);
    console.log(fields);
  });
  connection.end();

  res.status(200).json({"text": "del"});
});


/* Start */
app.listen(5000, function(err){
  if(err) console.log('error');
  console.log('port', 5000);
});