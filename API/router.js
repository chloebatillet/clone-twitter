const { Router } = require('express');
const router = Router()

const tweetController = require('./controllers/tweetController.js');
const userController = require('./controllers/userController.js');


router.route('/tweets')
    .get(tweetController.getAll)
    /* .post(tweetController.create) */

router.route('/tweets/:id')
    .get(tweetController.getOne)

router.route('/users')
    .get(userController.getAllProfiles)

router.route('/users/:id')
    .get(userController.getOneProfil)

module.exports = router;