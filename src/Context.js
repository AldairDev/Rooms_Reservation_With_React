import React, { useState, useEffect } from 'react'
import items from './data'

const RoomContext = React.createContext();

function RoomProvider({ children }) {

    const [state, setState] = useState([])

    useEffect(() => {


        const formatData = (data) => {

            let temItems = data.map(item => {
                let id = item.sys.id;
                let images = item.fields.images.map( image => image.fields.file.url )
                let room = { ...item.fields, images, id }
                return room;
            })

            return temItems
        }

        const rooms = formatData(items)
        setState(items)

        console.log(rooms);
        console.log('this is from state');
        console.log(state);

    }, [])


    return (
        <RoomContext.Provider value={{ ...state }}>
            {children}

        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }