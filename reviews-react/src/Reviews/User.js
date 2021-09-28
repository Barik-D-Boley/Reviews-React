import React from 'react';
import Rating from './Rating'

const User = ({data}) => {
    const { rating, name, job, image, text } = data;
    return (
        <>
            <img id='profile' src={image} alt={name} />
            <h2 id='name'>{name}</h2>
            <h3 id='jobTitle'>{job}</h3>
            <div id='rating'><Rating rating={rating}/></div>
            <p id='text'>{text}</p>
        </>
    )
}

export default User;
