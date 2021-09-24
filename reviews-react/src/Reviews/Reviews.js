import React, { useState } from 'react';
import data from './data';
import User from './User';

const Reviews = () => {
    const [userId, setUserId] = useState(0);

    function decrease() {
        if (userId > 0) {
            setUserId(userId - 1);
        } else {
            setUserId(data.length - 1);
        }
    }
    function increase() {
        if (userId < (data.length - 1)) {
            setUserId(userId + 1);
        } else {
            setUserId(0);
        }
    }

    return (
        <>
            <User data={data[userId]}/>
            <button onClick={() => decrease()}>Decrease</button>
            <button onClick={() => increase()}>Increase</button>
        </>
    );
}

export default Reviews;
