import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

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
        </>

    )
}

export default Room
