const express = require('express');
const app = express();
const mongo = require('./routes/mongo');

const port = process.env.PORT || 3000 ;

app.use('/api/database', mongo);

app.listen(port, () => console.log('Listening on port ' + port ));



