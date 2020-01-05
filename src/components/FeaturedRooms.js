import React, { useContext } from 'react'
import { RoomContext } from '../Context'

export default function FeaturedRooms () {

    const { greeting, name } = useContext(RoomContext)

    return (
        <div>
            {greeting} {name} from FeaturedRooms
        </div>
    )
}