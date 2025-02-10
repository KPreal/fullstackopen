import Person from './Person'

const PersonsList = ({ getFilteredPersons }) => {
    return (
        <div>
            {getFilteredPersons().map((person) =>
        <Person key={person.id} name={person.name} number={person.number} />)}
        </div>
    );
};

export default PersonsList;