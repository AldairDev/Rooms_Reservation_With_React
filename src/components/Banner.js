import React from 'react'

const Banner = ({children, tittle, subtitle}) => {
    return (
        <div className="banner">
            <h1> {tittle} </h1>
            <div></div>
            <p> {subtitle} </p>
            {children}

        </div>

    )
}

export default Banner
