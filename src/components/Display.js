import React from "react";

const display = (props)=>{
    return (
        <div className={(props.display[0] === "-") ? "Display DisplayNegative" : "Display"}>
            {props.display}
        </div>
    );
}

export default display;