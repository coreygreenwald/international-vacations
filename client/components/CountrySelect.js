import React from 'react';

export default function CountrySelect(props){
    let { countries, selectorId } = props;
    return (
        <select name="countries">
        {
            countries.map((country, index) => {
                return (
                    <option key={selectorId + ' ' + index}value={country.name}>{country.name}</option>
                )
            })
        }
        </select>
    )
}