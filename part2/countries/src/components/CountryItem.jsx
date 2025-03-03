import CountryDetails from './CountryDetails';

const CountryItem = ({ country, showDetails, toggleShowDetails }) => {
    return (
        <div>
            {country.name.common}
            <button onClick={() => toggleShowDetails(country.name.common)}>
                {showDetails === country.name.common ? 'hide' : 'show'}
            </button>
            {(showDetails === country.name.common) && (
                <CountryDetails country={country} />
            )}
        </div>
    );
};

export default CountryItem;