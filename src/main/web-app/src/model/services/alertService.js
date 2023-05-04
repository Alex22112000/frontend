export function getAlertConnection(){
    const ws = new WebSocket("ws://localhost:8080/WebProject-1/authTimer");
    ws.onmessage = (e) => {
        alert(e.data);
        ws.close();
    }
}