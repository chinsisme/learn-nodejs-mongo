const express = require('express'); 
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const jsonFile = fs.readFile('./static/enron.json', (err, data) => {
    if (err) throw err;
    return data;
})

router.use(express.json());

mongoose.connect('mongodb://localhost/nodejs')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log('Error',err));

async function importFile (inputFile) {
    return await enron.save(inputFile);
}


const enronSchema = new mongoose.Schema({
    sender: String,
    recipients: String,
    cc: String,
    text: String,
    mid: String,
    fpath: String,
    bcc: String,
    to: String,
    replyto: String,
    ctype: String,
    fname: String,
    date: String,
    folder: String,
    subject: String
});

enronSchema.set('collection', 'enron');

const Enron = mongoose.model('enron', enronSchema);


router.get('/', (req, res) => {
    res.send('Request received!');
    console.log('GET request!');
})

router.post('/importall', (req,res,callback) => {
    // const enron = new Enron(jsonFile);
    // send to MongoDB
    res.send('Response received');
    const enron = new Enron(jsonFile);
    const result = enron.save();
    console.log(enron);
    
})

module.exports = router;