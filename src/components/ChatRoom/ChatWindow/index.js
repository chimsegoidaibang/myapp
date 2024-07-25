import React, { useContext, useMemo } from 'react'
import Message from './message'
import { DataContext } from '../../../Context/DataProvider'
import { Avatar, Tooltip, Button, Flex } from 'antd'

const ChatWindow = () => {
    const { currentRoom, members, setIsInviteVisible } = useContext(DataContext)
    // check empty object
    const isEmpty = v => {
        return Object.keys(v).length === 0
    }

    if (isEmpty(currentRoom))
        return (
            <div className='chatwindow'>
                <p>Please select chat room!</p>
            </div>
        )
    console.log(members)
    return (
        <div className='chatwindow'>
            <div className='header'>
                <div>
                    <h4>{currentRoom && currentRoom.name}</h4>
                    <p>{currentRoom && currentRoom.description}</p>
                </div>
                <div>
                    <Flex gap='small'>
                        <Button
                            type='primary'
                            onClick={() => setIsInviteVisible(true)}>
                            Add new user
                        </Button>
                        {/* <Avatar.Group max={3}>
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
                        </Avatar.Group> */}
                    </Flex>
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
