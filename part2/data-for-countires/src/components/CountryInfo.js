import React from "react";
import Languages from "./Languages";
import Weather from "./Weather";

const CountryInfo = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>{country.capital}</p>
            <p>{country.area}</p>

            <h2>Languages:</h2>
            <ul>
                {
                    Object.keys(country.languages).map(key => {
                        return <Languages key={key} language={country.languages[key]} />
                    })
                }
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <Weather capital={country.capital} capitalInfo={country.capitalInfo} />

        </div>
    )

}

export default CountryInfo