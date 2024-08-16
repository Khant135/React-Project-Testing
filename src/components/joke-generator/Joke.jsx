import Button from "./Button"
import { useState } from "react";

function Joke () {

    const [joke,setJoke] = useState('');

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    }

    return (
        <div className="App">
            <h1>Joke Generator Using React and Joke API</h1>
            <div className="joke">
                <Button callApi={fetchApi} /> 
                <p>{joke}</p>    
            </div>
        </div>
    )
}

export default Joke