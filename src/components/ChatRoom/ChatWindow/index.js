import React, { useContext, useMemo } from 'react'
import Message from './message'
import { DataContext } from '../../../Context/DataProvider'
import { Avatar, Tooltip } from 'antd'
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons'
const ChatWindow = () => {
    const { currentRoom, members, setIsInviteVisible } = useContext(DataContext)

    return (
        <div className='chatwindow'>
            <div className='header'>
                <div>
                    <h4>{currentRoom && currentRoom.name}</h4>
                    <p>{currentRoom && currentRoom.description}</p>
                </div>
                <div>
                    <button onClick={() => setIsInviteVisible(true)}>
                        Add new user
                    </button>
                    <div>
                        <Avatar.Group max={3}>
                            {members &&
                                members.map(member => (
                                    <Tooltip
                                        key={member.uid}
                                        title={member.displayName}>
                                        <Avatar src={member.photoURL}>
                                            {member.photoURL
                                                ? ''
                                                : member.displayName
                                                      .charAt(0)
                                                      .toUpperCase()}
                                        </Avatar>
                                    </Tooltip>
                                ))}
                        </Avatar.Group>
                    </div>
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
