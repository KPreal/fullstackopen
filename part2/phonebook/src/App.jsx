import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  //const [selected, setSelected] = useState(Array(persons.length).fill(true))

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      id: newName,
      number: newNumber
    }
    const nameMatches = (person) => person.name === newName
    //console.log(persons.some(nameMatches))

    if (persons.some(nameMatches)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    //console.log('event target value ', event.target.value)
    setFilter(newFilter)
    //console.log('filter value', filter) //doesn't get updated yet?
    //console.log(filter === event.target.value) // why false?
  }

  const getFilteredPersons = () => {
    //[true, false, false, true]
    const matching = persons.map((person) => person.name.toLowerCase().includes(filter))
    //console.log(matching)
    const filtered = []
    
    for (let i = 0; i < persons.length; i++) {
      const person = persons[i]
      if (matching[i] === true) {
        filtered.push(person)
      }
      
    }
    //console.log(filtered)
    return filtered;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {getFilteredPersons().map((person) => <p key={person.id}>{person.name} {person.number}</p>)}
      
    </div>
  )
}

export default App
