import personService from "../services/persons"

const PersonForm = (props) => {

    const getDuplicate = () => props.persons.find(person => person.name.includes(props.newName))

    const updateUserNumber = (object) => {
        if (window.confirm(`${object.name} is already added to the phonebook, replace the old number with a new one?`) === true) {

            const newObject = { ...object, number: props.newNumber }
            personService
                .update(object.id, newObject)
                .then(updatedPerson => {
                    props.setPersons(props.persons.map(person => person.id === object.id ? updatedPerson : person))
                })
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const object = getDuplicate()
        if (typeof object !== 'undefined') {
            console.log(object);
            return updateUserNumber(object)
        }
        else {
            const newPerson = {
                name: props.newName,
                number: props.newNumber
            }
            personService
                .create(newPerson)
                .then(person => props.setPersons(props.persons.concat(person)))
            props.setNewName('')
            props.setNewNumber('')
        }
    }

    const handleInput = (event) => {
        props.setNewName(event.target.value)
    }

    const handleNumberInput = (event) => {
        props.setNewNumber(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>name: <input onChange={handleInput} /></div>
                <div>number: <input onChange={handleNumberInput} /></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default PersonForm;