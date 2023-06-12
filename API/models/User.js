const {
    DataTypes,
    Model
} = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'username'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.CHAR(200),
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'user',
    modelName: 'User'
});

module.exports = User;