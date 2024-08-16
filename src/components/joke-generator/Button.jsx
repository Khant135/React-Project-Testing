import './button.css'

function Button (props) {
    return (
        <button onClick={props.callApi}>
            Click to generate a joke.
        </button>
    )
}

export default Button