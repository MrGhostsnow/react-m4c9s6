import './ButtonReset.css';

function ButtonReset(props) {
    return(
        <div className="button_Reset">
            <button onClick={() => props.reset()}>Reset</button>
            </div>
    )
}

export default ButtonReset;