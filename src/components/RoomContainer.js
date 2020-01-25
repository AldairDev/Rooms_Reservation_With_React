import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, rooms, sortedRooms } = context
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

export default withRoomConsumer(RoomContainer)
