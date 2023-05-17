import React from "react";
import Text from "../../simple/Text";

function Message(props){
    return (
        <div>
            <Text text={"[ " + props.content.t + " ]"} color="blue"></Text>
            <Text text=" "></Text>
            <Text text={props.content.text}></Text>
        </div>
    )
}

export default Message;