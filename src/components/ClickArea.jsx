import React, { Component, useEffect, useState } from "react";
import './../App.css';
import normalReaction from './../assets/false.png';
import smileReaction from './../assets/true.png';


function ClickArea() {

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const click = () => {
        setClicked(true);
        
    }

    const notClick = () => {
        setClicked(false);
    }

    const nabanaClicked = () => {
        setCount((count)=>count+1);
    }

    return(
        <div className="Click-Area">
            <div class="click" >
                <h1>{count}</h1>
                <img src={clicked? smileReaction : normalReaction} className="nabana" onMouseDown={click} onMouseUp={notClick} onClick={nabanaClicked}></img>
            </div>
        </div>
    )
    
}

export default ClickArea;