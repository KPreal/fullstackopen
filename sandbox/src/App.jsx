import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import axios from 'axios'

const App = (props) => {
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })

  }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })



  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id === id ? returnedNote : note))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already delted from the server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>

        <input onChange={handleNoteChange} value={newNote} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}
export default App 