import React from 'react'
import Message from './message'
const ChatWindow = () => {
    return (
        <div className='chatwindow'>
            <div className='header'>
                <div>
                    <h4>Room Title</h4>
                    <p>Room Description</p>
                </div>
                <div>
                    <button>Add new user</button>
                    <div></div>
                </div>
            </div>
            <div className='messages'>
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />

                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
                <Message
                    displayName='Tran Duc Phuc'
                    message='Hello'
                />
            </div>
            <div className='user-input-form'>
                <input
                    type='text'
                    autoComplete='false'
                />
            </div>
        </div>
    )
}

export default ChatWindow
