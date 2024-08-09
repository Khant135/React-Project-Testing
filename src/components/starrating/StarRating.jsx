import { useState, useEffect } from "react"
import {FaStar} from 'react-icons/fa'
import './style.css'

function StarRating (props) {

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    const handleClick = (currentIndex) => {
        setRating(currentIndex);
    }

    const handleMouseEnter = (currentIndex) => {
        setHover(currentIndex);
    }

    const handleMouseRemove = () => {
        setHover(rating);
    }

    return (
        <>
            <h1>Star Rating Component</h1>
            {[...Array(props.noOfStars)].map((_,index) => {
                index += 1;
                return <FaStar key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'} 
                        onClick={() => handleClick(index)} onMouseMove={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseRemove()} size={30} />
            })}
        </>
    )
}

export default StarRating