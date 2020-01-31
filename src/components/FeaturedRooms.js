import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from './Title'
import Loading from "./Loading";
import Room from './Room'
export default function FeaturedRooms() {

  let { loading, featuredRooms: room } = useContext(RoomContext);

  const r = room.length === 0 ? console.log('nani') : console.log('ahora si', room)
  // r = true ? console.log(r) : console.log(r)
  // console.log(r);
  
  const rooms = (room.map(room => {
    return <Room key={room.id} room={room}  />
  })
  )
  return (
    
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>

    </section>
  );
}
