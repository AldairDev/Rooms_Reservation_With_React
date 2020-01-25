import React from "react";
import Room from "./Room";
const RoomsList = ({ sortedRoom }) => {

    // console.log('rooms', rooms)
    console.log('sortedRooms', sortedRoom);

    if (sortedRoom.length === 0 ) {

        return (
            <>
                <div className="empty-search">
                    <h3>unfortunately no rooms matched your search parameters</h3>
                </div>
                {/* <section className="roomslist">
                    <div className="roomslist-center">
                        {sortedRoom.map(item => {
                            return <Room key={item.id} room={item} />;
                        })}
                    </div>
                </section> */}
            </>
        );
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {sortedRoom.map(item => {
                    return <Room key={item.id} room={item} />;
                })}
            </div>
        </section>
    );
};

export default RoomsList;