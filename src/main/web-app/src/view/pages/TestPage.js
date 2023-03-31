import React from 'react';
import ChatServiceFactory from '../../model/services/ChatService';

class TestPage extends React.Component{
    
    constructor(){
        super();
        this.chat = ChatServiceFactory.createInstance();
        this.chat.subscribe((message) => {
            console.log(message);
        })
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        this.chat.sendMessage('priver mir');
    }

    render() {
        return(
            <div>
                <h1>This test page</h1>
                <button onClick={this.onClick}>send</button>
            </div>
        )
    }
}

export default TestPage;