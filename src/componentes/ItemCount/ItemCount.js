import { Component } from "react/cjs/react.production.min";
import React, { useState, target } from 'react';
import "../ItemCount/ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    let [counter, setCounter] = useState(initial)

    return (
    <div className={"section-counter"}>

        <p>(Img, Producto)</p>

        <div className={"section-btn"}>
            <button onClick={() => setCounter(--counter)}>-</button>
            <input onChange={input => setCounter(input.value)} type="text" value={counter}/>
            <button onClick={() => setCounter(++counter)}>+</button>
        </div>

        <button onClick={ () => onAdd(counter) } 
        className= {'addToCart'}> Añadir producto </button>
        { 
        stock < counter ? <span> No hay mas stock, solo se puede añadir {stock}  </span>: <></> 
        }

    </div>
    
    );
};

export default ItemCount;