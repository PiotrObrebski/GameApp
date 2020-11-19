import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';

const LaunchAnimation = (): ReactElement => {
    const [countDown, setCountDown] = useState('3');

    useEffect(() => {
        const interval = setInterval(()=>{
            const newCountDown = parseInt(countDown, 10)-1;
            setCountDown(newCountDown.toString())
        }, 1000)

        if(countDown === '0'){
            setCountDown('Go!');
        }

        return () => {
            clearInterval(interval);
        }
    }, [countDown])
    return(
        <div className="play-button-started">
            <div className="time-count-down">
                {countDown}
            </div>
        </div>
    )
}
export default LaunchAnimation;