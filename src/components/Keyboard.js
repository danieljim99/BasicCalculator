import React from "react";
import Key from "./Key";

const keyboard = (props)=>{
    return (
        <div className="Keyboard">
            <div className="Keyboard1">
            {props.keys.map((key, index) => {
                if(index <= 11){
                    return (
                        <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} allClear={props.allClear} key={index}/>
                    );
                } else {
                    return null;
                }
            })}
            </div>
            <div className="Keyboard2">
                <div>
                    <div className="Keyboard1">
                        {props.keys.map((key, index) => {
                            if(index > 11 && index <=14){
                                return (
                                    <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} key={index}/>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <div className="Keyboard1">
                        {props.keys.map((key, index) => {
                            if(index > 15){
                                return (
                                    <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} key={index}/>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
                <div>
                    {props.keys.map((key, index) => {
                        if(index === 15){
                            return (
                                <Key symbol={key} appendDisplay={props.appendDisplay} solve={props.solve} key={index}/>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default keyboard;