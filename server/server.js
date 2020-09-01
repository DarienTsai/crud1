/**
 * This server will do crud running actual SQL queries
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

/* Middleware */
app.use(bodyParser.json());
app.use(cors());


/* Routes */

// Create
app.post('/', function(req, res, next){
  console.log('pos');
  console.log(req.body);
  res.status(200).json({"text": "pos"});
});

// Read
app.get('/', function( req, res, next ){
  console.log('get');
  console.log(req.body);
  res.status(200).json({"text": "get"});
});

// Update
app.set('/', function( req, res, next ){
  console.log('set');
  res.status(200).json({"text": "set"});
});

// Delete
app.delete('/', function( req, res, next ){
  console.log('del');
  res.status(200).json({"text": "del"});
});


/* Start */
app.listen(5000, function(err){
  if(err) console.log('error');
  console.log('port', 5000);
});