const router = require('express').Router();
var rp = require('request-promise');
var cheerio = require('cheerio')
var result = " "

var country = 'Visa_requirements_for_Mongolian_citizens'

rp('https://en.wikipedia.org/w/index.php?action=render&contentmodel=json&title=' + country)
    .then(function (response) {
        // Process html like you would with jQuery...
        var officialCountry = {
            'no-visa-required': [],
            'visa-required': [],
            'depends': []
        }
        var countries = response.split('<tr>')
        countries.forEach((country) => {
            if (country.split('<td')[1] && !country.includes('Visa_policy_by_country')) {

                var firstLine = country.split('<td')[1];
                if (firstLine.match(/title="(.*)"/g)) {
                    var countryName = firstLine.match(/title="(.*)"/g)[0].split("\"")[1];
                    if (country.includes('table-yes')) {
                        officialCountry['no-visa-required'].push(countryName)
                    } else if (country.includes('table-no')) {
                        officialCountry['visa-required'].push(countryName)
                    } else if (!countryName.includes('Visa') && (!countryName.includes('visa'))) {
                        officialCountry['depends'].push(countryName)
                    }
                }
            }
        })
        result = officialCountry
    })
    .catch(function (err) {
        console.log(err)
    });

router.get('/', (req, res) => {
    res.send(result)
})
module.exports = router;