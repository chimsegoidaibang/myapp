import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import ChatApp from './components/ChatApp'
import AuthProvider from './context/AuthContext'
import './scss/styles.scss'
import DataProvider from './context/DataContext'
import AddNewRoomModal from './components/Modals/AddNewRoomModal'
const App = () => {
    return (
        <AuthProvider>
            <DataProvider>
                <Routes>
                    <Route
                        path='/'
                        index
                        element={<ChatApp />}
                    />
                    <Route
                        path='/signin'
                        element={<Signin />}
                    />
                </Routes>
                <AddNewRoomModal />
            </DataProvider>
        </AuthProvider>
    )
}

export default App
