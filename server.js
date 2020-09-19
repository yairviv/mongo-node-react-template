const express = require('express');
var rp = require('request-promise');
const usersRepository = require('./DataAccess/usersRepository');

const app = express();




const port = 5000;

app.listen(port, () => `Server running on port ${port}`);