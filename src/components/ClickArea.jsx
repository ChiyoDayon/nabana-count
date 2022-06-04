import React, { Component, useEffect, useState } from "react";
import './../App.css';
import normalReaction from './../assets/false.png';
import smileReaction from './../assets/true.png';
import nabanaNoise from './../assets/nabana_noise.wav'
import useSound from "use-sound";
import GlobalScore from "./GlobalScore";

function ClickArea() {

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const [play] = useSound(nabanaNoise);
    
    const click = () => {
        setClicked(true);
        setCount((count)=>count+1);
        play();
    }

    const notClick = () => {
        setClicked(false);
    }

    return(
        <div className="Click-Area">
            <div className="click" >
                <h1>{count}</h1>
                <img src={clicked? smileReaction : normalReaction} className="nabana" onMouseDown={click} onMouseUp={notClick}></img>
            </div>
            <GlobalScore />
        </div>
    )
    
}

export default ClickArea;