import React, { useState } from 'react'
import Title from './Title'
import FeaturedRooms from './FeaturedRooms'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
// import { Link } from 'react-router-dom'

const Services = () => {

    const [services, setServices] = useState(
        [
            {
                icon: <FaCocktail />,
                title: 'Free cocktails',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.tempore sit amet!"
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.tempore sit amet!"
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.tempore sit amet!"
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.tempore sit amet!"
            }

        ]
    )

    return (
        <>
            <section className="services">
                <Title title="services">
                        
                </Title>
                <div className="services-center">

                    {services.map((data, index) =>
                        <article key={index} className="service">
                            <span> {data.icon} </span>
                            <h6> {data.title} </h6>
                            <p> {data.info} </p>
                        </article>
                    )}

                </div>

            </section>

            <FeaturedRooms />
        </>
    )
}

export default Services
