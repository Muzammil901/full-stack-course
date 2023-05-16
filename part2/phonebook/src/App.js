import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [messageType, setMessageType] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }

  useEffect(hook, [])

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`) === true) {
      const deletedPersonId = person.id
      personService
        .removePerson(person.id)
        .then(result => {
          setPersons(persons.filter(person => person.id !== deletedPersonId));
          setErrorMessage(`Person has been removed from server.`)
          setMessageType('danger')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
        }).catch(error => {
          setErrorMessage(`Information of ${person.name} has already been deleted from server.`)
          setMessageType('danger')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
          setPersons(persons.filter(person => person.id !== deletedPersonId))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} messageType={messageType} />
      <Filter setFilter={setFilter} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName}
        setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
        setErrorMessage={setErrorMessage} setMessageType={setMessageType} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} removePerson={removePerson} />
    </div>
  )
}

export default App