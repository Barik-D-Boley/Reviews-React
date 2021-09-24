import React from 'react';
import Rating from './Rating'

const User = ({data}) => {
    const { rating, name, job, image, text } = data;
    return (
        <div className="reviewContainer">
            <img id="profile" src={image} alt={name} />
            <h2 id="name">{name}</h2>
            <h3 id="jobTitle">{job}</h3>
            <Rating rating={rating}/>
            <p id="text">{text}</p>
        </div>
    )
}

export default User;
