function findOverlap(country1, country2){
    var countryOne = country1['noVisa']
    var countryTwo = country2['noVisa']
    var overlap = []
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
module.exports = { formatCountryText, findOverlap }