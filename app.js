//entry point

//* importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
// var expressHbs = require("express-handlebars");

const app = express();
const port = 3000;
const route = require('./routes/route')

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'})) //extname helps identify the name of the files in view folder as `.hbs`
// app.set('view engine', '.hbs');//this refers to the engine above '.hbs'

//defining route
app.use('/api', route)

//add middleware
app.use(corse());
app.use(bodyParser.json());
//static files
app.use(express.static(app.join(__dirname, 'public')));

//route for testing
app.get('/', (req, res) => {
  res.send('testing this route');
})
app.listen(port, () => {
  console.log('nice! the site is live at', port);
})
