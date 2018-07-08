const express = require('express'); 
const router = express.Router();
const mongoose = require('mongoose');

router.use(express.json());

mongoose.connect('mongodb://localhost/nodejs')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log('Error',err));


// const enronSchema = new mongoose.Schema({
//     sender: String,
//     recipients: String,
//     cc: String,
//     text: String,
//     mid: String,
//     fpath: String,
//     bcc: String,
//     to: String,
//     replyto: String,
//     ctype: String,
//     fname: String,
//     date: String,
//     folder: String,
//     subject: String
// });

// enronSchema.set('collection', 'enron');

// const Enron = mongoose.model('enron', enronSchema);


router.get('/', (req, res) => {
    res.send('Welcome to Chinmay\'s MongoDB server!');
    console.log('GET Request received.');
})


module.exports = router;