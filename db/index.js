const db = require('./_db');

//PLACE MODEL IMPORTING HERE
const Nationality = require('./model/Nationality');

//PLACE ASSOCIATIONS HERE


//ENSURE TO EXPORT ALL
module.exports = {
    db, 
    Nationality
}