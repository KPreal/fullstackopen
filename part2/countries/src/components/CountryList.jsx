const CountryList = ({ getFilteredCountries, showDetails, toggleShowDetails }) => {
    const filteredCountries = getFilteredCountries();
    // console.log(filteredCountries)
    if (filteredCountries.length === 1) {
        const country = filteredCountries[0]
        // Convert languages object to array
        const languages = Object.values(country.languages);
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p> Capital {country.capital[0]}</p>
                <p> Area {country.area}</p>
                <h2>Languages</h2>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
                <img
                    className="country-flag"
                    src={country.flags.png}
                />
            </div>
        )
    }

    
    return (
        <div>
            {filteredCountries.map((country) => (
                <div key={country.cca3}>
                    {country.name.common}
                    <button onClick={() => toggleShowDetails(country.name.common)}>
                        {showDetails === country.name.common ? 'hide' : 'show'}
                    </button>
                    {showDetails === country.name.common && (
                        <div>
                            <p>Capital: {country.capital[0]}</p>
                            <p>Area: {country.area}</p>
                            <h2>Languages</h2>
                            <ul>
                                {Object.values(country.languages).map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                            <img className="country-flag" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CountryList;