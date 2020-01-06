import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
export default function FeaturedRooms() {
  const { featuredRooms: rooms } = useContext(RoomContext);
  console.log(rooms);

  return (
    <div>
      from FeaturedRooms
      <Loading />
    </div>
  );
}
