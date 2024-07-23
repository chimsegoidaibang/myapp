import React from 'react'
import Sidebar from './Sidebar'
import ChatWindow from './ChatWindow'
import { Row, Col } from 'antd'

const ChatRoom = () => {
    return (
        <div className='chatroom'>
            <Sidebar />
            <ChatWindow />
        </div>
    )
}

export default ChatRoom
