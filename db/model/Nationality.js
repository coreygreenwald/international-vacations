const db = require('../_db');
const Sequelize = require('sequelize');

let Nationality = db.define('nationality', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    noVisa: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    },

    visa: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    },

    depends: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    }
})

module.exports = Nationality;