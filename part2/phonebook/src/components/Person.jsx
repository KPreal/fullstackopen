const Person = ({id, name, number, removePerson}) => {
    return (
        <div>
            {name} {number}
            <button type='button' onClick={() => removePerson(id)}>delete</button>
        </div>
    );
};

export default Person;