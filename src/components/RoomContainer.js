import React, { useContext } from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomContext } from '../Context'
// import { withRoomConsumer } from '../Context'
import Loading from './Loading'


function RoomContainer() {

    const context = useContext(RoomContext)
    const { loading, rooms, sortedRooms, } = context
    // console.log('rooms', rooms);
    // console.log('sortedRoom', sortedRooms);


    if (loading) {
        return <Loading />

    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList sortedRoom={sortedRooms} />
        </>
    )
}

export default RoomContainer;

// export default withRoomConsumer(RoomContainer)
