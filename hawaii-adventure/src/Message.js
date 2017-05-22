import React from 'react';
import './App.css';


function Message(props) {
    return (
        <div>
        <h2>Send A message to all your rained out PDX homies: {props.message}</h2>
        <form className="message-form"
            onSubmit={event => {
                event.preventDefault();
                props.changeMessage(event.target.elements.message.value);
            }}
        >
            <input style={{
                fontSize: '15px',
                borderRadius: '5px',
                backgoundColor: 'while'
            }}
                name='message'
                type='text'
                placeholder='Message To Homies:' />
            <input style={{
                fontSize: '15px',
                borderRadius: '5px',
                backgroundColor: 'white'
            }}
                type='submit'
                name='submit'
            />
        </form>
        </div>

    )
}

export default Message;