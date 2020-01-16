import React, { useState, useEffect } from "react";
import items from "./data";
// import FeaturedRooms from "./components/FeaturedRooms";

const RoomContext = React.createContext();

function RoomProvider({ children }) {

    const [rom, setRooms] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    });

    console.log(rom)
    useEffect(() => {

        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        console.log(featuredRooms);
        setRooms({ 
            rooms, 
            featuredRooms,
            sortedRooms: rooms,  
            loading: false,
            price: maxPrice, 
            maxPrice, 
            maxSize});
            
    }, []);

    const formatData = ite => {
        let temItems = ite.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        });

        return temItems;
    };


    const handleChange = event => {
        const target = event.target;
        console.log(target)
        // const value = event.type === "checkbox" ? target.checked : target.value;
        const value = target.value;
        console.log(value)
        const name = event.target.name;
        console.log(name , value);

        setRooms(
            {
                [name]: value
            }, filterForm()
        )

        // let value = event.target.value;
        // console.log(type, name, value)
    }

    const filterForm = () => {
        // console.log("hello")
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = rom
        let tempRooms = [...rooms];
        if (type !== "all"){
            tempRooms = tempRooms.filter(room => room.type === type )
        }

        setRooms({ sortedRooms : tempRooms  })
    }



    const getRoom = slug => {
        const temItems = [...rom.rooms];
        const room = temItems.find(rooms => rooms.slug === slug)

        return room
    }

    return (
        <RoomContext.Provider value={{ ...rom, getRoom, handleChange }}> {children}</RoomContext.Provider >
    );
}

const RoomConsumer = RoomContext.Consumer;

function withRoomConsumer(Component) {
    return function cosumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer };
