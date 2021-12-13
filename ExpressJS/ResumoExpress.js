
//Basic server syntax 

const express = require('express'); //import
const path = require('path');

const express = express(); //init

//set static folder
app.use(express.static(path.join(__dirname, 'foldername'))); 

const PORT = process.env.PORT || 5000;


app.listen(PORT); // listen on port


// route handlers

app.get() ; //Fetch from database, load pages, return JSON, full access to requests and responses
app.post(); //
app.put(); //
app.delete(); //

// Middleware Functions - execute any code, make changes to request/response objects, end response cycle, call next middleware


