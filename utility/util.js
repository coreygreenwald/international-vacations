
 function formatCountryObject(response){
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

    return officialCountry
}

module.exports = {formatCountryObject}