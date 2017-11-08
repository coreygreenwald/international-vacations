const router = require('express').Router();
const Nationality = require('../../db/model/Nationality');

router.get('/', async (req, res, next) => {
    try {
        let nationalities = await Nationality.findAll();
        let nationalityObj = {};
        nationalities.forEach(nationality => {
            nationalityObj[nationality.name] = {
                noVisa: nationality.noVisa, 
                visa: nationality.visa,
                depends: nationality.depends
            }
        })
        res.json(nationalityObj);
    } catch(err){
        next(err);
    }
})

module.exports = router;