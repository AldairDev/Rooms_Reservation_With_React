import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

const Room = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner tittle="Our Rooms" >
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <section className="featured-rooms">
                <Title title="Search rooms" />
            </section>
            <RoomContainer />
        </>

    )
}

export default Room
