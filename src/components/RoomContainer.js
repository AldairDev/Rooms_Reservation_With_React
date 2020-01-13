import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../Context'
function RoomContainer({ context }) {

    const { loading, rooms, sortedRooms } = context

    if(!rooms){
        return <div> no data yet </div>
        
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)
