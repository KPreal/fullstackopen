import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'

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

    const getFilteredCountries = () => {
        /* const matching = countries.map((country) =>
            country.name.common.toLowerCase().includes(filter))
        const filtered = [] */
        return countries[0]
    }
    return (
        <div>
            find countries <input defaultValue={"Finland"} />
            <CountryList getFilteredCountries={getFilteredCountries} />
        </div>
    )
}
export default App