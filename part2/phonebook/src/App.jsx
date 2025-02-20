import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: '', id: '' })
  const [filter, setFilter] = useState('')

  const hook = () => {
    personService
      .getAll() //already returns response.data
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    //console.log("newperson", newPerson)

    const nameMatches = (person) => person.name === newPerson.name.trim()

    if (persons.some(nameMatches)) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          //setPersons(persons.concat(newPerson))
          setPersons(persons.concat(returnedPerson))
          setNewPerson({ name: '', number: '' }); // Reset the form
        })

    }
  }

  const removePerson = (id) => {
    //console.log(id)
    //console.log(personService.remove(id))
    personService
      .remove(id)
      .then((deletedPerson) => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const handleFormChange = (event) => {
    event.preventDefault()
    //name is 'name' or 'number', value is from field value
    const { name, value } = event.target;

    //console.log(name, value)

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
      <PersonsList getFilteredPersons={getFilteredPersons} removePerson={removePerson} />

    </div>
  )
}



export default App
