import React from "react";

const Form = (props) => {

    const handleInput = (event) => {
        props.setSearchedInput(event.target.value)
    }

    return (
        <div>
            <div>Find Countries: <input onChange={handleInput} /></div>
        </div>
    )
}

export default Form