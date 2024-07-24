import React, { createContext, useContext, useMemo, useState } from 'react'
import { AuthContext } from './AuthProvider'
import { useFirestore } from '../hooks/useFireStore'

export const DataContext = createContext()

export default function DataProvider({ children }) {
    const [isVisible, setIsVisible] = useState(false)
    const [isInviteVisible, setIsInviteVisible] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState('')
    const { uid } = useContext(AuthContext)

    //
    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            value: uid,
        }
    }, [uid])
    const rooms = useFirestore('rooms', roomsCondition)
    //
    const currentRoom = useMemo(
        () => rooms.find(room => room.id === selectedRoom) || {},
        [rooms, selectedRoom]
    )
    //
    const userCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            value: currentRoom.members,
        }
    }, [currentRoom.members])
    //
    const members = useFirestore('users', userCondition)

    return (
        <DataContext.Provider
            value={{
                rooms,
                members,
                isVisible,
                setIsVisible,
                selectedRoom,
                isInviteVisible,
                setIsInviteVisible,
                setSelectedRoom,
                currentRoom,
            }}>
            {children}
        </DataContext.Provider>
    )
}
