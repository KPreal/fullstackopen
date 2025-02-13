const PersonForm = ({ onSubmit, newPerson, handleFormChange }) => {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div>
            name: <input
              value={newPerson.name}
              name="name"
              onChange={handleFormChange} />
          </div>
          <div>
            number: <input
              value={newPerson.number}
              name="number"
              onChange={handleFormChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default PersonForm;
/* <div>
            <form onSubmit={props.addPerson}>
                <div>
                name: <input value={props.newName} onChange={props.handleNameChange} />
                </div>
                <div>
                number: <input value={props.newNumber} onChange={props.handleNumChange} />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
 */