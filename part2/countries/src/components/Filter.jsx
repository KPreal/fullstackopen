const Filter = (props) => {
    return (
    <form>
        <div>
            filter countries 
            <input value={props.filter} onChange={props.onChange} />
        </div>
    </form>
    );
  };
  
  export default Filter;
  