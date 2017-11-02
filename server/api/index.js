const router = require('express').Router();

router.use('/nationalities', require('./nationalities'));

module.exports = router;