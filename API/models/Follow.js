const {
    DataTypes,
    Model
} = require('sequelize');
const sequelize = require('../database');

class Follow extends Model {}

Follow.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: 'User',
            key: 'id'
          }
    },
    followerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'follower_id',
        references: {
            model: 'User',
            key: 'id'
          }
    }
}, {
    sequelize,
    tableName: 'follow',
    modelName: 'Follow',
    timestamps: false
});

module.exports = Follow;