const express = require('express');
const app = express();
const mongo = require('./routes/mongo');

app.use('/api/database', mongo);
