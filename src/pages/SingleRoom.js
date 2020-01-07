import React, { useState, useEffect, useContext } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import defaultBcg from '../images/room-1.jpeg'
import { RoomContext } from '../Context'
import { Link } from 'react-router-dom'

const SingleRoom = (props) => {

    const { getRoom } = useContext(RoomContext)
    const [room, setRoom] = useState({
        slug: props.match.params.slug,
        defaultBcg
    })


    const singleRoom = getRoom(room.slug)

    if (!singleRoom) {

        return <div className="error">
            <h3> no such room could be found </h3>
            <Link to="/home" className="btn-primary"> back </Link>
        </div>
    }

    const { name, price, type, breakfast, capacity, extras, images, pets, size, description } = singleRoom

    return (

        <Hero hero="roomsHero">

            <Banner tittle={`${name} room`} price="450">
                <Link to="/rooms" className="btn-primary"> back to rooms </Link>
            </Banner>
        </Hero>
    )
}

// import React, { Component } from 'react'

// export class SingleRoom extends Component {
//     constructor(props){
//         super(props);
//         console.log(this.props)
//     }
//     render() {
//         return (
//             <div>
//                 hello
//             </div>
//         )
//     }
// }

export default SingleRoom
