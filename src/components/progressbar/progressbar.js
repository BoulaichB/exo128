import React from 'react';
import { useState, useEffect } from 'react';

export const Progressbar = () => {
    let [width, setWidth] = useState(0);
    useEffect(() => {
        let Increment = setInterval(() => {
            setWidth(width + 10);
            if(width == 100){
                setWidth(10);
            }
        }, 1000);
        return () => {
            clearInterval(Increment);
        }
    }) 
  return (
    // Créer un component ProgressBar qui contient une bar de progressuib se remplit en fonction du temps. La barre doit commencer vide et se remplir jusqu'à 100% en 10 secondes. Utilisez le Hook useEffect pour mettre à jour la barre de progression toutes les secondes et useState pour stocker la valeur actuelle de remplissage
    <div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${width}%`}}></div>
        </div>
    </div>
  )
}
