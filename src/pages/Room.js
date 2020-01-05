import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Room = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner tittle="Our Rooms" >
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
        </div>

    )
}

export default Room
