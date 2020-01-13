import React from 'react'
import Room from './Room'

export default function RoomList({ rooms }) {
    

    if (!rooms) {
        return (
            <div>
                unfortunately no rooms matched yours search parameters
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((item, index) => {
                    return <Room key={index} room={item}> </Room>
                })}
            </div>
        </section>
    )
}
