const db = require('../_db');
const Sequelize = require('sequelize');

let Nationality = db.define('nationality', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Nationality;