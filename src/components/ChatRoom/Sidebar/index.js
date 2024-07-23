import React from 'react'
import UserInfo from './UserInfo'
import RoomList from './RoomList'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <UserInfo />
            <RoomList />
        </div>
    )
}

export default Sidebar
