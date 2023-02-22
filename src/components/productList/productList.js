import React from 'react';
import { useState, useEffect, useRef } from 'react';
import products from './datas/products.json';

const ProductList = () => {
    // Créer un component ProductList qui va afficher des produits venant d'un .JSON. Utiliser useState pour l'affichage des produits et useEffect pour charger les produits au moment du montage. Les données sont charger qu'une fois.
    let [affichage, setAffichage] = useState();
    let liste = <ul>{products.map((product, index) => (
            <li key={index}><span>{product.name}</span> <span>{product.price}</span></li>
        ))}</ul>

    useEffect(() => {
        setAffichage(liste);
    }, []);
    return (
        <div>{affichage}</div>
    )
}

export default ProductList