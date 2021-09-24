import React from 'react'
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Rating = ({rating}) => {
    console.log(rating);
    for(var i=0; i < 5; i++) {
        if (rating >= 1) {
            rating--;
            console.log(rating);
            return (
                <BsStarFill />
            )
        } else if (rating >= .5) {
            return (
                <BsStarHalf />
            )
        } else {
            return (
                <BsStar />
            )
        }
    }

    return (
        // have the top for loops change booleans, then an if statement checks if it's true here
    )

    // return (
    //     <div id="stars">
    //         <BsStarFill />
    //         <BsStarFill />
    //         <BsStarHalf />
    //         <BsStar />
    //         <BsStar />
    //     </div>
    // )
}

export default Rating
