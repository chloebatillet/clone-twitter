const {
    DataTypes,
    Model
} = require('sequelize');
const sequelize = require('../database');

class Hashtag extends Model {}

Hashtag.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'hashtag',
    modelName: 'Hashtag'
});

module.exports = Hashtag;