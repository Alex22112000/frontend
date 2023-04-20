import React from 'react';
import ChatServiceFactory from '../../model/services/ChatService';

function TestPage() {

    const chat = ChatServiceFactory.createInstance();
    chat.subscribe((message) => {
        console.log(message);
    })

    const onClick = (event) => {
        chat.sendMessage('priver mir');
    }

    return (
        <div>
            <h1>This test page</h1>
            <button onClick={onClick}>send</button>
        </div>
    )
}

export default TestPage;