import React from "react";
import ChatServiceFactory from "../../../model/services/ChatService";

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            messageValue: "",
            messages: []
        }
        this.chatService = ChatServiceFactory.createInstance();
        this.chatService.subscribe((message) => {
            this.setState({
                messages: [...this.state.messages, message]
            });
        });
        this.handleText = this.handleText.bind(this);
        this.send = this.send.bind(this);
    }
    componentDidMount() {
        
        this.chatService.open();
    }
    componentWillUnmount() {
        this.chatService.close();
    }
    handleText(e) {
        this.setState({
            messageValue: e.target.value
        })
    }
    send() {
        if (this.state.messageValue) {
            this.chatService.sendMessage(this.state.messageValue);
            this.setState({
                messageValue: ""
            })
        }
    }

    

    render() {
        return (
            <div>
                <p>Чат обсуждения товаров</p>
                <div style={{
                    color: "blue",
                    width: "350px",
                    height: "300px",
                    overflowY: "scroll",
                    overflowX: "auto",
                    //border: "1px solid black",
                }}>
                    {this.state.messages.map((message, index) => {

                        return message.type === "user" ?
                            <div key={index} style={{
                                marginBottom: "10px",

                            }}>
                                <span style={{
                                    color: "red",
                                    backgroundColor: "#bce9f7",
                                }}>{`[ ${message.username} : ${message.date} ] `}</span>
                                <span style={{
                                    wordWrap: "break-word"
                                }}>&nbsp;{message.text}</span>
                            </div>
                            :
                            <div key={index} style={{
                                marginBottom: "10px",

                            }}>
                                <span style={{
                                    wordWrap: "break-word"
                                }}>&nbsp;{message.text}</span>
                            </div>
                            })}
                </div>
                <input type="text" onChange={this.handleText} value={this.state.messageValue}></input>
                <button onClick={this.send}>{"Отправить"}</button>
            </div>
        )
    }
}

export default Chat;