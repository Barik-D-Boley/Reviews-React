import React from 'react';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

function Stars({input}) {
    // Returns the different star types depending on the input passed into the function
    if (input === 'full') {
        return (
            <BsStarFill />
        )
    } else if (input === 'half') {
        return (
            <BsStarHalf />
        )
    } else if (input === 'empty') {
        return (
            <BsStar />
        )
    }
}

export default Stars
