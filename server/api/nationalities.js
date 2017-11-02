const router = require('express').Router();
const Nationality = require('../../db/model/Nationality');

router.get('/', async (req, res, next) => {
    try {
        let nationalities = await Nationality.findAll();
        res.json(nationalities);
    } catch(err){
        next(err);
    }
})

module.exports = router;