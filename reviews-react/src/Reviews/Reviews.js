import React, { useState } from 'react';
import data from './data';
import User from './User';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Reviews = () => {
    const [userId, setUserId] = useState(0);

    function decrease() { // Increases the userId and resets if the number becomes too big
        if (userId > 0) {
            setUserId(userId - 1);
        } else {
            setUserId(data.length - 1);
        }
    }
    function increase() { // Decreases the userId and resets if the number becomes too small
        if (userId < (data.length - 1)) {
            setUserId(userId + 1);
        } else {
            setUserId(0);
        }
    }
    function random(userId) { // Generates a random number from 0 to the number of review there are, and runs itself again if the number equals the current userId
        let num = Math.round(Math.random() * (data.length - 1));
        if (num === userId) {
            random(userId);
        } else {
            setUserId(num);
        }
    }

    return (
        <div id='reviewContainer'>
            <User data={data[userId]}/>

        {/* Contains forward/back buttons, and runs inc/dec functions  */}
            <div className="buttonContainer">
                <button className='nextBtn' onClick={() => decrease()}>
                    <FiChevronLeft 
                        className='nextBtnReact' 
                        size='2rem' 
                    />
                </button>
                <button className='nextBtn' onClick={() => increase()}>
                    <FiChevronRight 
                        className='nextBtnReact' 
                        size='2rem'
                    />
                </button>
            </div>
        {/* Random Button */}
            <button id='randomBtn' onClick={() => random(userId)}>Surprise Me</button>
        </div>
    );
}

export default Reviews;
