import React, { useContext } from 'react'
import { auth } from './firebase/config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatRoom from './components/ChatRoom'
import Signin from './pages/Auth/Signin'
import AuthProvider from './Context/AuthProvider'
import DataProvider from './Context/DataProvider'
import AddRoomModal from './components/Modals/AddRoomModal'
import InviteMembersModal from './components/Modals/InviteMembersModal'

const App = () => {
    return (
        <div className='App'>
            <AuthProvider>
                <DataProvider>
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
                    <AddRoomModal />
                    <InviteMembersModal />
                </DataProvider>
            </AuthProvider>
        </div>
    )
}

export default App
