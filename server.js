const express = require("express");
require('dotenv').config({path: './config/.env'})
require('./config/db');
const temperatureRoutes = require('./routes/temperature.routes');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

app.use(morgan('combined')); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
// Routes
app.use('/api/temperature',temperatureRoutes); 

// Server
app.listen(port, () => console.log('Server app listening on port ' + port));