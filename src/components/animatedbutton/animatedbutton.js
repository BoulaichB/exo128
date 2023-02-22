import React from 'react'
import { Boutom } from './boutom/boutom';
import { useState, useEffect, useRef } from 'react';
import './public/css/app.css'

export const Animatedbutton = () => {
    // - Créer un component AnimatedButton qui contient un boutom. Lorsqu'on clique sur le bouton il va faire apparaitre un carré qui va clignoter toutes les secondes. Lorsqu'on rappuie dessus le carré disparait. Utiliser useState pour gèrer l'état d'affichage du carré et useEffect pour lancer/arreter l'animation
    let [afficher, setAfficher] = useState(false);
    let [clic, setClic] = useState(false);
    let idBoutom = useRef();
    
    let haha = () => {
        setClic(!clic);
    }

    useEffect(() => {
        setAfficher(!afficher);
        idBoutom.current.classList.toggle('apparition');
    }, [clic])
    return (
        <div>
            <Boutom name='UwU' onClick={haha} />
            <div className='divBoutom' ref={idBoutom}>
                {/* <span>{`A: ${afficher}`}</span> */}
            </div>
        </div>
    )
}
