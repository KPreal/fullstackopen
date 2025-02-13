import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  //const [newName, setNewName] = useState('')
  //const [newNumber, setNewNumber] = useState('')
  const [newPerson, setNewPerson] = useState({ name: '', number: '', id: '' })
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    console.log("newperson", newPerson)

    const nameMatches = (person) => person.name === newPerson.name.trim()

    if (persons.some(nameMatches)) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewPerson({ name: '', number: '', id: '' }); // Reset the form
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
      id: newPerson.name
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
