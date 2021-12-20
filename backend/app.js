//! Importing modules
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//! Initializing
const app = express();
app.use(cors());

//! ENV
const PORT = process.env.PORT;

//! Starting Server
app.listen(PORT, () => console.log('Server is running'));

//! Routes
app.get('/', (request, response) => {
  response.send('Hello');
});
