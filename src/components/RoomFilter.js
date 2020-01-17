import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
    // console.log(rooms)
    const context = useContext(RoomContext)
    // console.log(context);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context
    let types = getUnique(rooms, "type");
    types = ["all", ...types];

    types = types.map((item, index) => (
        <option key={index} value={item}> {item} </option>
    ))

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        className="form-control"
                        value={type}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}
