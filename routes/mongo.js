const express = require('express'); 
const router = express.Router();

router.get('/', (req, res) => {
    res.send(console.log('Response received!'));
})


module.exports = router;