const Tweet = require('../models/Tweet');
const sequelize = require('../database')

module.exports = {
    async getAll(_, res) {
        // à modifier pour récupérer tous les tweets des personnes que je suis : 
        // - 
        const result = await Tweet.findAll({
            include: ['retweet', 'like', 'user', 'replies'],
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
    },

    async getOne(req, res) {
        const id = Number(req.params.id);

        const result = await Tweet.findByPk(id, {
            include: ['retweet', 'like', 'user', 'replies'],
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
    }
}