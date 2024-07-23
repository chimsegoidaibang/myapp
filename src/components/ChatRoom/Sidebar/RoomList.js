import React, { useContext, useEffect, useMemo, useState } from 'react'

import { AuthContext } from '../../../Context/AuthProvider'
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    QuerySnapshot,
    where,
} from 'firebase/firestore'
import { db } from '../../../firebase/config'
const RoomList = () => {
    const { uid } = useContext(AuthContext)
    // const [rooms, setRooms] = useState([])
    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            value: uid,
        }
    }, [uid])
    // useEffect(() => {
    //     const collectionRef = collection(db, 'rooms')
    //     const q = query(
    //         collectionRef,
    //         where(
    //             roomsCondition.fieldName,
    //             roomsCondition.operator,
    //             roomsCondition.value
    //         ),
    //         orderBy('createAt')
    //     )
    //     const unsubscibed = onSnapshot(q, QuerySnapshot => {
    //         const result = []
    //         QuerySnapshot.forEach(doc => {
    //             result.push({ ...doc.data(), id: doc.id })
    //         })

    //         console.log(result)

    //         setRooms(result)
    //     })
    // }, [])

    return (
        <div className='roomlist'>
            <h4>Room List</h4>
            <ul>
                {rooms && rooms.map(room => <li key={room.id}>{room.name}</li>)}
            </ul>
        </div>
    )
}

export default RoomList
