import Message from "../dto/Message";
import AuthService from "./authService";
import Store from "./Store";

const API_URL = "ws://localhost:8080/WebProject-1/chat"

class ChatService extends Store{
    constructor(){
        super();
        this.connection = new WebSocket(API_URL);
        this.connection.onopen = () => {
            console.log("open");
        }
        this.connection.onmessage = (event) => {
            console.log(JSON.parse(event.data));
            this._emit(JSON.parse(event.data));
        }
    }

    sendMessage(text){
        console.log("send: " + text);
        const message = new Message();
        message.username = AuthService.getLogin();
        message.text = text;
        this.connection.send(JSON.stringify(message));
    }

    close(){
        this.connection.close(1000, "Complete");
    }
/*
    open(){
        this.username = AuthService.getLogin()
    }*/
}

class ChatServiceFactory{
    static _chat = null;

    static _createInstance(){
        return new ChatService();
    }

    static createInstance(){
        if (ChatServiceFactory._chat === null){
            ChatServiceFactory._chat = ChatServiceFactory._createInstance();
        }
        return ChatServiceFactory._chat;
    }
}

export default ChatServiceFactory;