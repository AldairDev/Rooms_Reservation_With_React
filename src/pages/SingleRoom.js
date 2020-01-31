import React, { useState, useContext } from 'react'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import defaultBcg from '../images/room-1.jpeg'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'
import { Link } from 'react-router-dom'

const SingleRoom = (props) => {

    const { getRoom } = useContext(RoomContext)
    
    const [room, setRoom] = useState({
        slug: props.match.params.slug,
    })


    const singleRoom = getRoom(room.slug)

    if (!singleRoom) {

        return <div className="error">
            <h3> no such room could be found </h3>
            <Link to="/home" className="btn-primary"> back </Link>
        </div>
    }

    // console.log(singleRoom)
    const { name, price, type, breakfast, capacity, extras, images, pets, size, description } = singleRoom

    const [maingImg, ...defaultImg] = images

    console.log(maingImg);

    return (

        <>
            <StyledHero img={maingImg}>

                <Banner tittle={`${name} room`} price="450">
                    <Link to="/rooms" className="btn-primary"> back to rooms </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((img, index) => {
                        return <img key={index} src={img} alt={name} />
                    })
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p> {description} </p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6> price : ${price} </h6>
                        <h6> size : {size} SQFT </h6>
                        <h6> Max capacity :
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6> {pets ? "pets allowed" : "not pets allowed"} </h6>
                        <h6> {breakfast && "Free breakfast included"} </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    {extras.map((item, index) => <li key={index}> -{item} </li>)}
                </ul>
            </section>
        </>
    )
}

export default SingleRoom
