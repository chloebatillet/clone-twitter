const { Router } = require('express');
const router = Router()

const tweetController = require('./controllers/tweetController.js')

router.route('/tweets')
    .get(tweetController.getAll)
    /* .post(tweetController.create) */

module.exports = router;