import React, { useContext, useState, useMemo } from 'react'
import { createContext } from 'react'
import { AuthContext } from './AuthContext'
import useFirestore from '../hooks/useFirestore'
import { UsageState } from 'webpack'
export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [isOpenAddNewRoom, setIsOpenAddNewRoom] = useState(false)
    // const [selectedRoom, setSelectedRoom] = UsageState({})
    const {
        user: { uid },
    } = useContext(AuthContext)
    //
    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        }
    }, [uid])
    const rooms = useFirestore('rooms', roomsCondition)
    return (
        <DataContext.Provider
            value={{
                isOpenAddNewRoom,
                setIsOpenAddNewRoom,
                rooms,
                setSelectedRoom,
                selectedRoom,
            }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
