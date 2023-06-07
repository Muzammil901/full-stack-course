import React from "react";
import { useState } from "react";
import CountryInfo from "./CountryInfo";

const CountriesInfo = ({ country }) => {
    const [showView, setShowView] = useState(false)

    const handleButton = () => {
        setShowView(!showView)
    }

    return (
        <div>
            <ul>
                <li>
                    {country.name.common}
                    <button onClick={handleButton}>show</button>
                    {showView && <CountryInfo country={country} />}
                </li>
            </ul>
        </div>
    )
}

export default CountriesInfo