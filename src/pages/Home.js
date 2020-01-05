import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment >
            <Hero >
                <Banner tittle="Marriot Hotel" subtitle="the best look in Lima">
                    <Link to="/rooms" className="btn-primary"> Our rooms </Link>
                </Banner>
            </Hero>

            <Services />
        </React.Fragment >

    )
}

export default Home
