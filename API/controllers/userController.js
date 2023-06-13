const User = require('../models/User');
const sequelize = require('../database')

module.exports = {
    async getAll(_, res) {
        const result = await User.findAll({
            include: ['retweeted', 'liked', 'followings', 'followers'],
            /*order: [
                ['created_at', 'DESC']
            ], */
            attributes: {
                include: [
                    [sequelize.literal('(SELECT COUNT(*) FROM "follow" WHERE "follow"."follower_id" = "User"."id")'),
                    'number_following'
                    ],
                    [sequelize.literal('(SELECT COUNT(*) FROM "follow" WHERE "follow"."user_id" = "User"."id")'),
                    'number_follower'
                    ]                    
                ]
            }
        })
        res.json(result)
    },

    /* async getOne(req, res) {
        const id = Number(req.params.id);

        const result = await Tweet.findByPk(id, {
            include: ['retweet', 'like'],
            order: [
                ['created_at', 'DESC']
            ],
            attributes: {
                include: [
                    [sequelize.literal('(SELECT COUNT(*) FROM "like" WHERE "like"."tweet_id" = "Tweet"."id")'),
                    'number_like'
                    ],
                    [sequelize.literal('(SELECT COUNT(*) FROM "retweet" WHERE "retweet"."tweet_id" = "Tweet"."id")'),
                    'number_retweet'
                    ]
                ]
            }
        })
        res.json(result)
    } */
}