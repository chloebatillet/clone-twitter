const Hashtag = require('./models/Hashtag');
const Tweet = require('./models/Tweet');
const User = require('./models/User');

const Retweet = require('./models/Retweet');
const Like = require('./models/Like');
const Follow = require('./models/Follow');


/**
 * Relations N:1
 */

// user <--> tweet
User.hasMany(Tweet, {
    foreignKey: 'userId'
});
Tweet.belongsTo(User, {
    foreignKey: 'userId'
});


// tweet <--> reply (dans la table tweet)
Tweet.hasMany(Tweet, {
    foreignKey: 'repliesTo'
});
Tweet.belongsTo(Tweet, {
    foreignKey: 'repliesTo'
});


/**
 * Relations N:N
 */

// user <--> user (follow)
Follow.belongsTo(User, {
    foreignKey: 'userId',
    as: 'User'
});
Follow.belongsTo(User, {
    foreignKey: 'followerId',
    as: 'Follower'
});

User.belongsToMany(User, {
    through: Follow,
    as: 'followers',
    foreignKey: 'userId',
    otherKey: 'followerId'
});
User.belongsToMany(User, {
    through: Follow,
    as: 'followings',
    foreignKey: 'userId',
    otherKey: 'userId'
});

// tweet <--> hashtag


// user <--> tweet (retweet)
Tweet.belongsToMany(User, {
    through: Retweet,
    as: 'retweet',
    foreignKey: 'tweetId'
});
User.belongsToMany(Tweet, {
    through: Retweet,
    as: 'retweeted',
    foreignKey: 'userId'
});


// user <--> tweet (like)
Tweet.belongsToMany(User, {
    through: Like,
    as: 'like',
    foreignKey: 'tweetId'
});
User.belongsToMany(Tweet, {
    through: Like,
    as: 'liked',
    foreignKey: 'userId'
});


async function test() {
    const res = await User.findAll({
        include: ['followers', 'followings']
    });
    console.log(res);
}

test();