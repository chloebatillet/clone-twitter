const User = require('../models/User');
const Tweet = require('../models/Tweet');

const sequelize = require('../database')

module.exports = {
    async getAllProfiles(_, res) {
        const result = await User.findAll({
            include: ['retweeted', 'liked', 'followings', 'followers'],
            /*order: [
                ['created_at', 'DESC']
            ], */
            attributes: {
                // on exclue les infos personnelles
                // il faudra aussi les exclure de 'followings' et 'followers'
                exclude: ['email', 'password'],
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

    async getOneProfil(req, res) {
        const id = Number(req.params.id);

        const result = await User.findByPk(id, {
            include: ['retweeted', 'liked', 'followings', 'followers',
            // on ordonnera aussi 'liked' et 'retweeted' mais pour le moment ils n'y pas de timestamp sur leur table.
            {
                model: Tweet,
                as: 'tweets',
                separate: true,
                order: [
                    ['created_at', 'DESC']
                ]
            }],
            attributes: {
                // on exclue les infos personnelles
                // il faudra aussi les exclure de 'followings' et 'followers'
                exclude: ['email', 'password'],
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
    }
}