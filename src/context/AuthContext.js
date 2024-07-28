import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import { serverTimestamp } from 'firebase/firestore'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged(user => {
            if (user) {
                const { uid, displayName, email, photoURL } = user
                setUser({
                    uid,
                    displayName,
                    email,
                    photoURL,
                    createAt: serverTimestamp(),
                })
                navigate('/')
                setIsLoading(false)
                return
            } else {
                navigate('/signin')
                setIsLoading(false)
            }
        })

        return () => {
            unsubscribed()
        }
    }, [])
    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <p>Loading....</p> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
