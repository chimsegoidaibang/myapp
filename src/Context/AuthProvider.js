import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscibed = auth.onAuthStateChanged(user => {
            console.log({ user })

            if (user) {
                const { displayName, email, uid, photoURL } = user
                setUser({
                    displayName,
                    email,
                    uid,
                    photoURL,
                })
                setLoading(false)
                navigate('/')
            }

            navigate('/signin')
        })

        // clean up function
        return () => {
            unsubscibed()
        }
    }, [])
    return (
        <AuthContext.Provider value={user}>
            {isLoading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
