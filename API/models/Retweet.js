const {
    DataTypes,
    Model
} = require('sequelize');
const sequelize = require('../database');

class Retweet extends Model {}

Retweet.init({
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
    tableName: 'retweet',
    modelName: 'Retweet',
    // ici il faudra accepter les timestamps
    timestamps: false
});

module.exports = Retweet;