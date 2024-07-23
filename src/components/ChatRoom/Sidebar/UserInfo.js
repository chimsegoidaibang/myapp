import React from 'react'
import { auth } from '../../../firebase/config'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'
const UserInfo = ({ avatar, name }) => {
    const handleSignOut = () => {
        signOut(auth)
    }

    const { displayName, photoURL } = useContext(AuthContext)

    return (
        <div className='user-info'>
            <div className='info'>
                <div className='Avatar'>
                    <div className='avatar-wrapper'>
                        <img className='avatar-image' />
                    </div>
                </div>
                <p>{displayName}</p>
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
