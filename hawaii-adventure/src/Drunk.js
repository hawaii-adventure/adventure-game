import React from 'react';
import './App.css';
import empty from './images/empty.jpg';
import pina from './images/pina.jpg'

function Drunk(props) {
    let newImage = empty;
    return (

        <div>
            <button className="drinkButton"
                onCLick={event => {
                    event.preventDefault();
                    props.drinkPina(newImage) > DRINK ME!
            </button>
    </div>
    )
}

export default Drunk;