import React, { useContext } from 'react'
import { DataContext } from '../../../Context/DataProvider'
const RoomList = () => {
    // const { uid } = useContext(AuthContext)
    // const roomsCondition = useMemo(() => {
    //     return {
    //         fieldName: 'members',
    //         operator: 'array-contains',
    //         value: uid,
    //     }
    // }, [uid])
    // const rooms = useFirestore('rooms', roomsCondition)

    const { rooms, setIsVisible, setSelectedRoom } = useContext(DataContext)

    const handleAddNewRoom = () => {
        setIsVisible(true)
    }
    return (
        <div className='roomlist'>
            <h4>Room List</h4>
            <ul>
                {rooms &&
                    rooms.map(room => (
                        <li
                            key={room.id}
                            onClick={() => setSelectedRoom(room.id)}>
                            {room.name}
                        </li>
                    ))}
            </ul>
            <button onClick={handleAddNewRoom}>Add new room</button>
        </div>
    )
}

export default RoomList
