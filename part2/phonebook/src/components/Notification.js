import React from "react";

const Notification = ({ message, messageType }) => {
    console.log(message);
    if (message === null) {
        return null
    }

    let messageStyle = {
        color: 'red',
        background: 'lightgray',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (messageType === 'danger') {
        messageStyle = { ...messageStyle, color: 'red' }
    }
    else if (messageType === 'success') {
        messageStyle = { ...messageStyle, color: 'green' }
    }

    return (
        <div style={messageStyle}>
            {message}
        </div>
    )
}

export default Notification