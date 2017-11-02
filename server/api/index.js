const router = require('express').Router();
const rp = require('request-promise');
const Nationality = require ('../../db/model/Nationality.js')
const { formatCountryText }  = require('../../utility/util')



router.post('/', (req, res, next) => {
    rp('https://en.wikipedia.org/w/index.php?action=render&contentmodel=json&title=Visa_requirements_for_' + req.body.name + '_citizens')
    .then(function (response) {
        return formatCountryText(response)
    })
    .then(function (countryData){
        Nationality.create({ name: req.body.name, visa: countryData.visa, noVisa: countryData.noVisa, depends: countryData.depends})
        res.send(countryData)
    })
    .catch(function (err) {
        console.log(err)
    });


})

module.exports = router;