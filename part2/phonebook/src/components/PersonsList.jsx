import Person from './Person'

const PersonsList = ({ getFilteredPersons, removePerson }) => {
    return (
        <div>
            {getFilteredPersons().map((person) =>
                <Person
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    number={person.number}
                    removePerson={removePerson} />)}
        </div>
    );
};

export default PersonsList;