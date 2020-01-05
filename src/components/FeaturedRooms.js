import React, { Component } from 'react'
import {RoomContext} from '../Context'
export class FeaturedRooms extends Component {

    static contextType = RoomContext;

    render() {

        let value = this.context;

        return (
            <div>
                hello from featuredRooms {value}
            </div>
        )
    }
}

export default FeaturedRooms
