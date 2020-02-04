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
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, filterRooms, handleCheckBox } = context

    let types = getUnique(rooms, "type");
    // console.log(types)
    types = ["all", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}> {item} </option>
    ))

    let people = getUnique(rooms, "capacity");
    // console.log(people);

    people = people.map((items, index) => (
        <option key={index} value={items}> {items} </option>
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
                        onClick={filterRooms}
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* guest filter */}
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        className="form-control"
                        value={capacity}
                        onChange={handleChange}
                        onClick={filterRooms}
                    >
                        {people}
                    </select>
                </div>
                {/* end guest filter */}
                {/* price filter */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price} </label>
                    <input type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        onClick={filterRooms}
                        className="form-control" />
                </div>
                {/* end price filter */}

                {/* size Filter */}
                {/* <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="minSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div> */}
                {/*end size Filter */}
                {/* <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"  onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" onChange={handleChange}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div> */}
            </form> 
        </section>
    )
}
