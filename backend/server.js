const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./connection/connection');
const cors = require('cors');

// load env variables
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

// mongodb connection
connectDB();

app.use(cors());

// parse request to body-parser
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

// load route
app.use('/' , require('./router/contact'));

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
