import React from "react"

const Message = ({ displayName, message }) => {
    return (
        <div className='message'>
            <div className='avatar'></div>
            <div className='content'>
                <h4 className='username'>{displayName}</h4>
                <p className='message-content'>{message}</p>
            </div>
        </div>
    )
}

export default Message
