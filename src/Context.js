import React, { useState, useEffect } from "react";
import items from "./data";
// import FeaturedRooms from "./components/FeaturedRooms";

const RoomContext = React.createContext();

function RoomProvider({ children }) {

    const [rooms, setRooms] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    });

    useEffect(() => {

        const formatData = ite => {
            let temItems = ite.map(item => {
                let id = item.sys.id;
                let images = item.fields.images.map(image => image.fields.file.url);
                let room = { ...item.fields, images, id };
                return room;
            });

            return temItems;
        };

        const rooms = formatData(items);
        const featuredRooms = rooms.filter(room => room.featured === true);
        console.log(featuredRooms);
        setRooms({ rooms, featuredRooms, sortedRooms: rooms, loading: false });
    }, []);

    const getRoom = slug => {
        const temItems = [...rooms.rooms];
        const room = temItems.find(rooms => rooms.slug === slug)

        return room
    }

    return (
        <RoomContext.Provider value={{ ...rooms, getRoom }}> {children}</RoomContext.Provider >
    );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
