import React from 'react';
import { useState, useEffect } from 'react';

export const Timer = () => {
    // Crér un component Timer qui va afficher un compte à rebours. Utiliser le useEffect pour gèrer les secondes à retirer et useState pour gèrer l'affichage du compte à rebours.
    let [seconds, setSeconds] = useState(10);
    useEffect(() => {
        if(seconds > 0){
            let decrement = setTimeout(() => {
                setSeconds(seconds - 1)
            }, 1000) 
            return () => {
                clearTimeout(decrement)
            }
        }
       
    }, [seconds])
    return (
        <div className='inline-block bg-red-500 rounded-full p-5 text-5xl text-white font-bold'><span>{seconds != 10 && seconds >= 0 ? `0${seconds}` : seconds}</span></div>
    )
}
