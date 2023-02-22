import React from 'react'
import { useState, useEffect, useRef } from 'react';

export const Todolist = () => {
    // Crér un componment ToDoList qui contient une liste de taches qui auront chacunes un titre. Dans ce component se trouve également une bar de recherche qui va permettre de filtrer les taches. Utiliser useEffect pour mettre à jour la liste de taches en fonction de la recherche de l'utilisateur et useState pour stocker les taches et la valeur de recherche.
    // let myRef = useRef();
    let myInput = useRef();
    let [liste, setListe] = useState([{task: "Exercice 1"}, {task: "League of Legends"}, {task: "Random"}, {task: "Flemme"}]);
    let [newList, setNewList] = useState([]);
    let [search, setSearch] = useState('');

    const searchInput = () => {
        setSearch(myInput.current.value);
    }

    useEffect(() => {
        let newNew = [];
        liste.map(item => {
            if(item.task.includes(search)){
                newNew.push(item.task);
            }
            
        });
        setNewList(newNew);
    }, [search]);
    let affichage = [];
    newList.map((item, index) => affichage.push(<h2 key={index} className='border border-black w-1/6 py-1 my-1'>{item}</h2>))


    return (
        <div>
            <h1 className='text-3xl font-bold'>To do list</h1>
            <div>
                <input type="text" className='bg-gray-200 border border-gray-300 rounded pl-2' placeholder='Search' onInput={searchInput} ref={myInput}/>
            </div>
            <div>
                {affichage}
            </div>
            
        </div>
    )
}
