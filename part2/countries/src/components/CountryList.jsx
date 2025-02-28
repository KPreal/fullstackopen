const CountryList = ({getFilteredCountries}) => {
    console.log()
    return(
        
        <ul>
            <li>first country: {getFilteredCountries().name.common}</li>
            <li>list element</li>
        </ul>
    )
}
export default CountryList