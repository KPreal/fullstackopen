import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import Filter from './components/Filter'

const App = () => {

    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const hook = () => {
        axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => {
                setCountries(response.data)
            })
    }
    useEffect(hook, [])

    if (countries.length === 0) {
        return null
    }

    const handleFilterChange = (event) => {
        const newFilter = event.target.value
        setFilter(newFilter)
    }

    const getFilteredCountries = () => {
        if (filter === '') {
            return []
        }
        const filteredCountries = countries.filter(country =>
            country.name.common.toLowerCase().includes(filter.toLowerCase())
        
        );
        return filteredCountries.slice(0,10)
    }
    return (
        <div>
            <Filter value={filter} onChange={handleFilterChange} />
            <CountryList getFilteredCountries={getFilteredCountries} />
        </div>
    )
}
export default App