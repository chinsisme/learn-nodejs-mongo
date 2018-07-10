const express = require('express'); 
const router = express.Router();
const mongoose = require('mongoose');
const generateSchema = require('generate-schema');
const schema = require('./schema');
const fs = require('fs');

router.use(express.json());
const gamesraw = fs.readFileSync('./static/games.json');
const gamesJSON = JSON.parse(gamesraw);


// console.log(JSON.stringify(gamesJSON,null,2));

const gameSchema = generateSchema.mongoose(gamesJSON);
console.log(generateSchema.mongoose(gamesJSON));
const Games = mongoose.model('game',gameSchema);
// console.log(schema.clubRoundSchema);

async function getGames() {
    let games = await Games.find({})
        .exec( (err,result) => {
            if (err) console.log('Error',err);
            console.log('Result:', result);
        } );
    console.log(games);
    return games;
}

router.get('/get/all/games', (req,res) => {
    let result = getGames();
    res.send(result);
    console.log(result);
    // mongoose.connection.close();
})

module.exports = router;