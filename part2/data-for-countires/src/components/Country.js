import React from "react";
import CountryInfo from "./CountryInfo";
import CountriesInfo from "./CountriesInfo";

const Country = (props) => {
    const searchedInput = props.searchedInput

    if (props.countries !== null && props.searchedInput !== '') {

        let filteredCountries = props.countries.filter(country => country.name.common.toLowerCase().includes(searchedInput));
        let filteredCountriesLength = filteredCountries.length

        if (filteredCountriesLength > 10) {
            return (
                <div>
                    <p>Too many matches, specify another filter</p>
                </div>
            )
        }
        else if (filteredCountriesLength === 1) {
            return filteredCountries.map(country => {
                return (
                    <div key={country.name.common}>
                        <CountryInfo country={country} />
                    </div>
                )
            })
        }
        else if (filteredCountriesLength > 1) {
            return filteredCountries.map(country => {
                return (
                    <div key={country.name.common}>
                        <CountriesInfo key={country.name.common} country={country} />
                    </div>
                )
            });
        }
    }

}

export default Country