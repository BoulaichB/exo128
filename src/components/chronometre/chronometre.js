import React from 'react'
import { useState, useEffect } from 'react'

export const Chronometre = () => {
    // Créer un component Chronomètre qui, grace au useEffect, va afficher un chronomètre qui s'incrémtente automatiquement toute les secondes. Le chronomètre doit etre formaté correctement, c'est à dire que par exemple quand on arrive à 61 secondes, le chronomètre doit afficher 1:01.
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    
    useEffect(() => {
        let IncrementSeconds = setInterval(() => {
            setSeconds(seconds + 1);
            if(seconds === 61){
                setSeconds(0);
                setMinutes(minutes + 1);
            }
        }, 1000);
        return () => {
            clearInterval(IncrementSeconds);
        }

    },[seconds, minutes])

    return (
        <div>
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
            <span>:</span>
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
    )
}
