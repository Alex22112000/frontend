import React, { useEffect, useState, useRef } from "react";
import ChatServiceFactory from "../../../model/services/ChatService";
import classes from './Chat.module.css';

const chatService = ChatServiceFactory.createInstance();

function Chat() {
    
    const [messages, setMessages] = useState([]);
    const [messageValue, setMS] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        chatService.subscribe((message) => {
            setMessages(prevState => [...prevState, message]);
        });
        chatService.open();
        return () => {
            chatService.close();
        }
    }, [])

    useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
      }, [messages]);

    const handleText = (e) => {
        setMS(e.target.value)
    }
    const send = () => {
        if (messageValue) {
            chatService.sendMessage(messageValue);
            setMS("");
        }
    }


    return (
        <div className={classes.chat}>
            <p>Чат обсуждения товаров</p>
            <div style={{
                color: "blue",
                //background: "white",
                width: "350px",
                height: "300px",
                overflowY: "scroll",
                overflowX: "auto",
                //border: "1px solid black",
            }}
            ref={messagesEndRef}
            >
                {messages.map((message, index) => {

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
            <input type="text" onChange={handleText} value={messageValue}></input>
            <button onClick={send}>{"Отправить"}</button>
        </div>
    )
}

export default Chat;