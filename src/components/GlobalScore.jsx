import React, { useEffect, useState } from 'react';
import { getAllValue } from "./scoreHandle";

function GlobalScore() {

    const [globalScore, setGlobalScore] = useState(0);

    const getScore = () => {
        setInterval(async () => {
            const value = await getAllValue();
            setGlobalScore(value);
        }, 5000);
    }

    useEffect(() => {
        getScore();
    }, []);

    return(
        <div className="global-score">
            <h3 onClick={getScore}>Global : {globalScore}</h3>
        </div>
    )
    
}

export default GlobalScore;