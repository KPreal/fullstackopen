const Filter = (props) => {

    console.log('filter props',props)
    return (
        <div>filter shown with <input value={props.filter} onChange={props.handleFilterChange}/>
        </div>
    )
}
export default Filter