import React, { useEffect, useState } from 'react';
import { getAllValue, setValue, getCurrent } from "./scoreHandle";

function GlobalScore() {

    const [globalScore, setGlobalScore] = useState(0);
    let current = 0;

    /* const setScore = async () => {
        const globalValue = await getAllValue();
        const docValue = await setValue();
        const localValue = getCurrent();
        
        if (docValue < localValue) {
            setGlobalScore(globalValue+(getCurrent()+1));
            //console.log(globalValue);
        } else {
            //console.log("to low",localValue);
            setGlobalScore(globalValue);
        }
    } */
    
    const setScore = async () => {
        const globalValue = await getAllValue();
        if (globalValue > current) {
            current = globalValue;
            setGlobalScore(globalValue);
        }
    }


    useEffect(() => {
        setScore();
        const interval = setInterval( async() => {
            setScore();
        }, 5);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="global-score">
            <h3>Global : {globalScore}</h3>
        </div>
    )
    
}

export default GlobalScore;