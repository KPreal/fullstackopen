const Person = (props) => {
    //const person = props[0]
    console.log('person', props)
    return (
        <div>
            {props.name} {props.number}
        </div>
    );
};

export default Person;