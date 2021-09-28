import React, { useState } from 'react'
import Stars from './Stars';

const Rating = ({rating}) => {
    let star1 = 'empty';
    let star2 = 'empty';
    let star3 = 'empty';
    let star4 = 'empty';
    let star5 = 'empty';

    if (rating >= 5) {
        star1 = 'full';
        star2 = 'full';
        star3 = 'full';
        star4 = 'full';
        star5 = 'full';
    } else if (rating >= 4.5) {
        star1 = 'full';
        star2 = 'full';
        star3 = 'full';
        star4 = 'full';
        star5 = 'half';
    } else if (rating >= 4) {
        star1 = 'full';
        star2 = 'full';
        star3 = 'full';
        star4 = 'full';
    } else if (rating >= 3.5) {
        star1 = 'full';
        star2 = 'full';
        star3 = 'full';
        star4 = 'half';
    } else if (rating >= 3) {
        star1 = 'full';
        star2 = 'full';
        star3 = 'full';
    } else if (rating >= 2.5) {
        star1 = 'full';
        star2 = 'full';
        star3 = 'half';
    } else if (rating >= 2) {
        star1 = 'full';
        star2 = 'full';
    } else if (rating >= 1.5) {
        star1 = 'full';
        star2 = 'half';
    } else if (rating >= 1) {
        star1 = 'full';
    } else if (rating >= 0.5) {
        star1 = 'half';
    }

    return (
        <div id='stars'>
            <Stars input={star1}/>
            <Stars input={star2}/>
            <Stars input={star3}/>
            <Stars input={star4}/>
            <Stars input={star5}/>
        </div>
    )
}

export default Rating
