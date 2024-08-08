import { useState,useEffect } from "react";
import './style.css'

function RandomColor(){

    const [color,setColor] = useState('#000000');
    const [type, setType] = useState('hex');

    useEffect(() => {
        handleGenerateColor()
    }, [type])

    // useEffect(() => {
    //     console.log('Updated color:', color);
    // }, [color])

    const handleHEXChange = () => {
        setType('hex');
    }

    const handleRGBChange = () => {
        setType('rgb');
    }

    const randomColorUtility = (length) =>{
        return Math.floor(Math.random()*length)
    }

    const handleGenerateColor = () => {

        if(type === 'hex'){
            
            const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

            let hexColor = '#';

            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomColorUtility(hex.length)];
            }

            setColor(hexColor);

        } else {

            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);

            setColor(`rgb(${r},${g},${b})`);

        }
    }

    return (
        <>
            <h1>Random Color Generator Component</h1>
            <div>
                <div>
                    <button onClick={handleHEXChange} disabled={type === 'hex' ? true : false}>Change to HEX Color</button>
                    <button onClick={handleRGBChange} disabled={type === 'rgb' ? true : false}>Change to RGB Color</button>
                    <button onClick={handleGenerateColor}>Generate Color</button>
                    <span>Color Value: </span> {color}
                </div>
            </div>
        </>
    )
}

export default RandomColor;