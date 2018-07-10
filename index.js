const mongoose = require('mongoose');
const express = require('express');
const app = express();
const mongo = require('./routes/database');

const db_ip = '192.168.0.102';

mongoose.connect('mongodb://' + 'localhost' +'/nodejs')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log('Error',err));


const port = process.env.PORT || 3000 ;

app.use('/api/database', mongo);

app.listen(port, () => console.log('Listening on port ' + port ));



