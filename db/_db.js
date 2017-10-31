'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

let db;
if (config.use_env_variable) {
    db = new Sequelize(process.env[config.use_env_variable]);
} else {
    db = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = db;