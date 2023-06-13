const { Router } = require('express');
const router = Router()

const tweetController = require('./controllers/tweetController.js');
const userController = require('./controllers/userController.js');


router.route('/tweets')
    .get(tweetController.getAll)
    /* .post(tweetController.create) */

router.route('/users')
    .get(userController.getAll)

    
module.exports = router;