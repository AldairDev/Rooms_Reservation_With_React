import React, { useState, useEffect } from "react";
import items from "./data";
// import Client from "./Contentful";

const RoomContext = React.createContext();

function RoomProvider({ children }) {

    const [rom, setRom] = useState({

        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        //
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    })

    useEffect(() => {

        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        //
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));


        setRom(state => ({
            ...state,
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            //
            price: maxPrice,
            maxPrice,
            maxSize
        }))

        filterRooms()

    }, [rom.type, rom.capacity])

    const formatData = (ite) => {

        let tempItems = ite.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = { ...item.fields, images, id };
            return room;
        });

        return tempItems

    }

    const getRoom = slug => {
        let tempRooms = [...rom.rooms];
        const room = tempRooms.find(room => room.slug === slug)
        return room
    };

    const handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name
        // console.log(value, name);

        filterRooms(value)

        setRom(state => ({
            ...state,
            [name]: value
        }
        ));

        console.log('[handleChange]', rom);

    };

    const filterRooms = () => {

        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = rom;

        capacity = parseInt(capacity);

        let tempRooms = [...rooms];

        if (type === "all") {

            let cuarto = formatData(items);
            // console.log('if all', cuarto);

            setRom(state => ({
                ...state,
                sortedRooms: cuarto
            }))
        }

        else {
            if (type !== "all") {
                console.log('if notAll', rooms);
                tempRooms = tempRooms.filter(rooms => rooms.type === type)
            }
            if (capacity !== 1) {
                tempRooms = tempRooms.filter(rooms => rooms.capacity >= capacity)
            }
            console.log('[filterRooms]', tempRooms);


            setRom(state => ({
                ...state,
                sortedRooms: tempRooms
            }))
        }
    }

    return (
        <RoomContext.Provider value={{ ...rom, getRoom, handleChange }}>

            {children}

        </RoomContext.Provider>
    )
}
const RoomConsumer = RoomContext.Consumer;

function withRoomConsumer(Component) {
    return function cosumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}
export { RoomProvider, RoomConsumer, withRoomConsumer, RoomContext }

// import React, { Component } from 'react';
// import items from "./data";
// const RoomContext = React.createContext();

// export default class RoomProvider extends Component {

//     state = {
//         rooms: [],
//         name: "wendy",
//         sortedRooms: [],
//         featuredRooms: [],
//         loading: true,
//         //
//         type: "all",
//         capacity: 1,
//         price: 0,
//         minPrice: 0,
//         maxPrice: 0,
//         minSize: 0,
//         maxSize: 0,
//         breakfast: false,
//         pets: false
//     };


//     componentDidMount() {
//         // this.getData();
//         let rooms = this.formatData(items);
//         let featuredRooms = rooms.filter(room => room.featured === true);
//         console.log(featuredRooms);

//         //
//         let maxPrice = Math.max(...rooms.map(item => item.price));
//         let maxSize = Math.max(...rooms.map(item => item.size));
//         this.setState({
//             rooms,
//             featuredRooms,
//             sortedRooms: rooms,
//             loading: false,
//             //
//             price: maxPrice,
//             maxPrice,
//             maxSize
//         });

//         // console.log('useEffect', this.state)
//     }

//     // let khe = console.log('after', this.state);


//     formatData(items) {
//         let tempItems = items.map(item => {
//             // console.log(item.fields)
//             let id = item.sys.id;
//             let images = item.fields.images.map(image => image.fields.file.url);

//             let room = { ...item.fields, images, id };
//             return room;
//         });
//         return tempItems;
//     }
//     getRoom = slug => {
//         let tempRooms = [...this.state.rooms];
//         const room = tempRooms.find(room => room.slug === slug);
//         return room;
//     };
//     handleChange = event => {
//         // const type = event.target.type;
//         const target = event.target;
//         const value = target.type === "checkbox" ? target.checked : target.value;
//         const name = target.name;
//         console.log(name, value);

//         this.setState(
//             {
//                 [name]: value
//             },
//             this.filterRooms
//         );
//         // console.log('handlechange',this.state);

//     };
//     filterRooms = () => {
//         let {
//             rooms,
//             type,
//             capacity,
//             price,
//             minSize,
//             maxSize,
//             breakfast,
//             pets
//         } = this.state;

//         capacity = parseInt(capacity);

//         let tempRooms = [...rooms];
//         if (type !== "all") {
//             tempRooms = tempRooms.filter(rooms => rooms.type === type);
//             this.setState({
//                 sortedRooms: tempRooms
//             })
//         }
//         if (type === "all") {
//             this.setState({
//                 sortedRooms: rooms
//             })
//         }

//         if (capacity !== 1) {
//             tempRooms = tempRooms.filter(rooms => rooms.capacity >= capacity)
//             this.setState({
//                 sortedRooms: tempRooms
//             })
//             // transform values
//             // get capacity

//         }
//         console.log('return', this.state)

//     }

//     render() {

//         return (
//             <RoomContext.Provider

//                 value={{
//                     ...this.state,
//                     getRoom: this.getRoom,
//                     handleChange: this.handleChange
//                 }}
//             >
//                 {this.props.children}
//             </RoomContext.Provider>
//         );
//     }
// }
// const RoomConsumer = RoomContext.Consumer;

// function withRoomConsumer(Component) {
//     return function ConsumerWrapper(props) {
//         return (
//             <RoomConsumer>
//                 {value => <Component {...props} context={value} />}
//             </RoomConsumer>
//         );
//     };
// }

// export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer };
