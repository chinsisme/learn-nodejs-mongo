const mongoose = require('mongoose');

//Groups collection
const countrySchema = new mongoose.Schema({
    key: String,
    name: String
});

const clteamSchema = new mongoose.Schema({
    key: String,
    name: String,
    code: String,
    country: countrySchema
});

const groupSchema = new mongoose.Schema({
    name: String,
    teams: clteamSchema
});

const groupsSchema = new mongoose.Schema({
    _id: String,
    name: String,
    groups: groupSchema
});

//Games collection

const clubTeamSchema = mongoose.Schema({
    key: String,
    name: String,
    code: String
});

const clubMatchSchema = mongoose.Schema({
    date: String,
    team1: clubTeamSchema,
    team2: clubTeamSchema,
    score1: Number,
    score2: Number
});

const clubRoundSchema = mongoose.Schema({
    _id: { type: 'ObjectId' },
    name: String,
    rounds: [clubMatchSchema]
});

//Clubs collection

const clubSchema = mongoose.Schema({
    _id: String,
    name: String,
    clubs: [clubTeamSchema]
});


module.exports.countrySchema = countrySchema;
module.exports.clteamSchema = clteamSchema;
module.exports.groupSchema = groupSchema;
module.exports.groupsSchema = groupsSchema;
module.exports.clubTeamSchema = clubTeamSchema;
module.exports.clubMatchSchema = clubMatchSchema;
module.exports.clubRoundSchema = clubRoundSchema;
module.exports.clubSchema = clubSchema;

