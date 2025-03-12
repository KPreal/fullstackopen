import Weather from './Weather'

const CountryDetails = ({ country }) => {
    const languages = Object.values(country.languages);
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <img className="country-flag"
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`} />
            <Weather latlng={country.latlng}/>
        </div>
    );
};

export default CountryDetails;