import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({ context }) {

    const { loading, rooms, sortedRooms } = context
    console.log('[RoomContainer] context', context)

    if (loading) {
        return <Loading />

    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)
