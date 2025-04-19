import React from 'react'
import './style.css'

const Cards = () => {
    return (
        <div className='relative card-container'>
            <img src="/projectImage.jpg" alt="image" className="card-img" />
            <div className='caption'>
                <h1 className='text-4xl uppercase'> caption</h1>
            </div>
        </div>
    )
}

export default Cards
