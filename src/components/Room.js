import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
export default function Room({ children, room }) {

    const { images, price, name, slug } = room
    console.log(room)

    return (
        <>
            <article className="room">
                <div className="img-container">
                    <img src={images[0]} alt="" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to={`/singleRoom/${slug}`} className="btn-primary room-link">
                        Features
                </Link>
                    <p className="room-info"> {name} </p>
                </div>
            </article>
        </>
    )
}
