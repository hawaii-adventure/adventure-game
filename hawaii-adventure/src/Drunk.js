import React from 'react';
import './App.css';
import empty from './images/empty.jpg';
import pina from './images/pina.jpg'

function Drunk(props){
return(
    <div>
        <h2>CLICK ME TO DRINK ME!</h2>
    <img src={pina} className="drunkImage" 
    onClick= {() => props.drinkPina()}/> 
    </div>
)
}

export default Drunk;