import React, { useEffect, useState } from 'react';
import { getAllValue } from "./scoreHandle";

function GlobalScore() {

    const [globalScore, setGlobalScore] = useState(0);
    let current = 0;

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