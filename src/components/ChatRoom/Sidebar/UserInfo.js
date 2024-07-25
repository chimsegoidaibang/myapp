import React from 'react'
import { auth } from '../../../firebase/config'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'
import { Avatar } from 'antd'
const UserInfo = ({ avatar, name }) => {
    const handleSignOut = () => {
        signOut(auth)
    }

    const { displayName, photoURL } = useContext(AuthContext)

    return (
        <div className='user-info'>
            <div className='info'>
                <Avatar src={photoURL}>
                    {photoURL ? '' : displayName.charAt(0).toUpperCase()}
                </Avatar>
                <p className='display-name'>{displayName}</p>
            </div>
            <div className='controls'>
                <button
                    className='btn'
                    id='signout'
                    onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default UserInfo
