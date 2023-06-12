const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    define: {
        logging: console.log, // false
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


module.exports = sequelize;