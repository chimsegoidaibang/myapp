import React from 'react'
import { auth } from './firebase/config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatRoom from './components/ChatRoom'
import Signin from './pages/Auth/Signin'
import AuthProvider from './Context/AuthProvider'
const App = () => {
    return (
        <div className='App'>
            <AuthProvider>
                <Routes>
                    <Route
                        path='/'
                        element={<ChatRoom />}
                    />
                    <Route
                        path='/signin'
                        element={<Signin />}
                    />
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
