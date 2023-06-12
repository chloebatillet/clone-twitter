const {
    DataTypes,
    Model
} = require('sequelize');
const sequelize = require('../database');

class Tweet extends Model {}

Tweet.init({
    content: {
        type: DataTypes.CHAR(240),
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'tweet',
    modelName: 'Tweet'
});

module.exports = Tweet;

