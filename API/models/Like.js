const {
    DataTypes,
    Model
} = require('sequelize');
const sequelize = require('../database');

class Like extends Model {}

Like.init({
    tweetId: {
        type: DataTypes.INTEGER,
        field: 'tweet_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
    },
}, {
    sequelize,
    tableName: 'like',
    modelName: 'Like',
    timestamps: false
});

module.exports = Like;