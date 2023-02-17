import React from 'react'
import { useState, useEffect } from 'react';

export const Compteur = () => {
    // - Créer un component Compteur. Ce component doit avoir un compteur qu'on peut incrémenter au click d'un bouton. À chaque fois que le component est mis à jour, afficher dans la console "Le component a été mis à jour" en utilisant useEffect
    let [count, setCount] = useState(0);

    let Increment = () => {
        setCount(count + 1);
        
    }

    useEffect(() => {
        console.log('Le component a été mis à jour');
    })
    return (
        <div>
            <span>{count}</span>
            <button className='block bg-yellow-400 rounded text-white font-bold px-2 py-1' onClick={Increment}>Pika</button>
        </div>
    )
}
