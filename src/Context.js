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

    const [lel, setLel] = useState({
        name: "aldair",
        lastName: "Sosa"
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

        setLel(state => ({
            ...state,
            game: "dota2",
            water: "cielo",
            prueba: "lo que sea"
        }))
        // console.log("khe")
    }, [])

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
    
    const handleChange = async event  => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name
        console.log(value, name);

        setLel(state=>({
            ...state,
            name : "joan"
        }))


        setRom(state => ({
            ...state,
            price : 339,
            [name]: value
        }
        ));
        
        console.log(rom);
        

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

        let tempRooms = [...rooms];
        if (type !== "all") {
            tempRooms = tempRooms.filter(rooms => rooms.type === type)
            setRom(state => ({
                ...state,
                sortedRooms: tempRooms
            }))
        }
        if (type === "all") {
            setRom(state => ({
                ...state,
                sortedRooms: rooms
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

// import React, {Component} from 'react';
// import items from "./data";
// const RoomContext = React.createContext();

// export default class RoomProvider extends Component {

//     state = {
//         rooms: [],
//         name : "wendy",
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
//     }

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
//         // transform values
//         // get capacity

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
