import React from "react";

const key = (props)=>{
    let result = null;
    if(props.symbol === "="){
        result = (
            <div className="SolveKey" onClick={props.solve.bind(this, props.symbol)}>
                {props.symbol}
            </div>
        );
    } else if (props.symbol === "AC"){
        result = (
            <div className="Key" onClick={props.allClear.bind(this)}>
                {props.symbol}
            </div>
        );
    } else {
        result = (
            <div className={(props.symbol === "0") ? "ZeroKey" : "Key"} onClick={props.appendDisplay.bind(this, props.symbol)}>
                {props.symbol}
            </div>
        );
    }
    return result;
}

export default key;