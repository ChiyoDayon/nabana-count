import React, {useEffect, useState} from "react";
import './../App.css';
import normalReaction from './../assets/false.png';
import smileReaction from './../assets/true.png';
import useSound from "use-sound";
import nabanaNoise from './../assets/nabana_noise.wav';
import { checkLog, setValue, addData } from "./scoreHandle";

function ClickArea() {

    const [count, setCount] = useState('Loading');
    const [clicked, setClicked] = useState(false);
    const [play] = useSound(nabanaNoise);

    const setData = () =>{
        if (count !== 'Loading') {
            setCount((count)=>count+1);  
            addData();
        }
    }

    const click = () => {
        setClicked(true);
        //console.log("click");
        play();
        setData();
    }

    const notClick = () => {
        setClicked(false);
        //console.log("not click");
    }

    const check = async() => {
        await checkLog();
        setCount(await setValue());
    }

    useEffect(() => {
        check();
        //console.log("start");
    }, []);

    return(
        <div className="Click-Area">
            <div className="click" >
                <h1>{count}</h1>
                <img src={clicked? smileReaction : normalReaction} className="nabana" onMouseDown={click} onMouseUp={notClick}></img>
            </div>
        </div>
    )
    
}

export default ClickArea;