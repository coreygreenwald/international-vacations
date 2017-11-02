const request = require('request-promise');
const Nationality = require ('../db/model/Nationality.js')

function findOverlap(country1, country2){
    var countryOne = country1.noVisa;
    var countryTwo = country2.noVisa;
    var overlap = [];
    for (i=0; i<countryOne.length; i++){
       if (countryTwo.includes(countryOne[i])) {overlap.push(countryOne[i])}
    }
}

function formatCountryText(response){
    var officialCountry = {
        'noVisa': [],
        'visa': [],
        'depends': []
    }
    var countries = response.split('<tr>')
    countries.forEach((country) => {
        if (country.split('<td')[1] && !country.includes('Visa_policy_by_country')) {

            var firstLine = country.split('<td')[1];
            if (firstLine.match(/title="(.*)"/g)) {
                var countryName = firstLine.match(/title="(.*)"/g)[0].split("\"")[1];
                if (country.includes('table-yes')) {
                    officialCountry.noVisa.push(countryName)
                } else if (country.includes('table-no')) {
                    officialCountry.visa.push(countryName)
                } else if (!countryName.includes('Visa') && (!countryName.includes('visa'))) {
                    officialCountry.depends.push(countryName)
                }
            }
        }
    })
    return officialCountry
}

async function nationalityCreator(nation){
    try {
        let response = await request(`https://en.wikipedia.org/w/index.php?action=render&contentmodel=json&title=Visa_requirements_for_${nation}_citizens`)
        let countryData = formatCountryText(response);
        let nationality = await Nationality.create({ name: nation, visa: countryData.visa, noVisa: countryData.noVisa, depends: countryData.depends});
        return nationality;
    } catch(err){
        console.error(`an error has occurred for the nation ${nation}`);
    }
}

module.exports = { nationalityCreator }