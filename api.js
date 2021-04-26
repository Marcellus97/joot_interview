const express = require('express');
const mongoose = require('mongoose');

// routes
const customers = require('./routes/customers');
const inventory = require('./routes/inventory');
const repairs = require('./routes/repairs');
const index = require('./routes/index');

// Below is the CLI command I used to start mongodb
// mongod --dbpath ./mongodb --port 1234
const CONNECTION_STRING = 'mongodb://127.0.0.1:1234/interview';
mongoose.connect(CONNECTION_STRING, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify: false
    }
);

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();
// Incoming requests should be parsed as json
app.use(express.json());

app.use('/', index);
app.use('/customers', customers);
app.use('/inventory', inventory);
app.use('/repairs', repairs);

app.listen(4000);