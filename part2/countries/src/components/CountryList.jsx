import CountryDetails from './CountryDetails';
import CountryItem from './CountryItem';

const CountryList = ({ getFilteredCountries, showDetails, toggleShowDetails }) => {
    const filteredCountries = getFilteredCountries();

    if (filteredCountries.length === 1) {
        const country = filteredCountries[0];
        return <CountryDetails country={country} />;
    }

    return (
        <div>
            {filteredCountries.map((country) => (
                <CountryItem
                    key={country.cca3}
                    country={country}
                    showDetails={showDetails}
                    toggleShowDetails={toggleShowDetails}
                />
            ))}
        </div>
    );
};

export default CountryList;