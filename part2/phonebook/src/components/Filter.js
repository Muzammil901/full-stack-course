const Filter = ({ setFilter }) => {
    const handleFilter = (event) => {
        return setFilter(event.target.value)
    }
    return (
        <div>
            filter shown with <input onChange={handleFilter} />
        </div>
    )
}

export default Filter;