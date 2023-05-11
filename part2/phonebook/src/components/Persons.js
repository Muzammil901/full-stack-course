const Persons = ({ persons, filter, removePerson }) => {

    if (filter !== '') {
        return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => {
                return (
                    <div>
                        <ul>
                            <li key={person.name} >
                                {person.name} {person.number} <button onClick={() => removePerson(person)}>Delete</button>
                            </li>
                        </ul>
                    </div>
                )
            })
    }
    else {
        return persons.map(person => {
            return (
                <div>
                    <ul>
                        <li key={person.name} >
                            {person.name} {person.number} <button onClick={() => removePerson(person)}>Delete</button>
                        </li>
                    </ul>
                </div>
            )
        })

    }
}

export default Persons;