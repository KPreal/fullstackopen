import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: '', id: '' })
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    console.log("newperson", newPerson)

    const nameMatches = (person) => person.name === newPerson.name.trim()

    if (persons.some(nameMatches)) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          //setPersons(persons.concat(newPerson))
          setPersons(persons.concat(response.data))
          setNewPerson({ name: '', number: ''}); // Reset the form
        })

    }
  }

  const handleFormChange = (event) => {
    event.preventDefault()
    //name is 'name' or 'number', value is from field value
    const { name, value } = event.target;

    console.log(name, value)

    const updatedPerson = {
      name: newPerson.name,
      number: newPerson.number,
      //id: newPerson.name
    };

    updatedPerson[name] = value;

    setNewPerson(updatedPerson)
  };



  const handleFilterChange = (event) => {
    //console.log('handleFilterChange called', event)
    const newFilter = event.target.value
    setFilter(newFilter)
  }

  const getFilteredPersons = () => {
    //[true, false, false, true]

    const matching = persons.map((person) => person.name.toLowerCase().includes(filter))
    const filtered = []

    for (let i = 0; i < persons.length; i++) {
      const person = persons[i]
      if (matching[i] === true) {
        filtered.push(person)
      }

    }
    return filtered;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />

      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newPerson={newPerson}
        handleFormChange={handleFormChange}
      />

      <h3>Numbers</h3>
      <PersonsList getFilteredPersons={getFilteredPersons} />

    </div>
  )
}



export default App
