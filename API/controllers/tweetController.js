const Tweet = require('../models/Tweet');


module.exports = {
    async getAll(_, res) {
        const result = await Tweet.findAll({
            include: ['retweet', 'like']
        })
        res.json(result)
    }
}