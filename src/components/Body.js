import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

const body = (props)=>{
    return (
        <div className="Body">
            <Display display={props.display}/>
            <Keyboard appendDisplay={props.appendDisplay} solve={props.solve} allClear={props.allClear} keys={props.keys}/>
        </div>
    );
}

export default body;