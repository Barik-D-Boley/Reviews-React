import React, { useState } from 'react';
import data from './data';
import User from './User';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    function random(userId) {
        let num = Math.round(Math.random() * 3);
        if (num === userId) {
            random(userId);
        } else {
            setUserId(num);
        }
    }

    return (
        <div id='btnContainer'>
            <User data={data[userId]}/>
            <div className="buttonContainer">
                <button className='nextBtn' onClick={() => decrease()}>
                    <FiChevronLeft 
                        className='nextBtnReact' 
                        size='2rem' 
                        color='#6CB4EE'
                    />
                </button>
                <button className='nextBtn' onClick={() => increase()}>
                    <FiChevronRight 
                        className='nextBtnReact' 
                        size='2rem' 
                        color='#6CB4EE'
                    />
                </button>
            </div>
            <button id='randomBtn' onClick={() => random(userId)}>Surprise Me</button>
        </div>
    );
}

export default Reviews;
