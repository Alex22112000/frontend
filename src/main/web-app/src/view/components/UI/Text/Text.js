import React from "react";

function Text(props){
    return (
        <nobr style={{color: props.color}}>{props.text}</nobr>
    )
}

export default Text;