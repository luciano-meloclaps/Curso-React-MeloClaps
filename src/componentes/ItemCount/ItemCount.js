import React, { useState } from 'react';
import "../ItemCount/ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [qty, setQty] = useState(initial);

    const sumarQty = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }
    const restarQty = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    }

        return (
            <>
            //Insertar mod card
                {/* <div className="ui cards">
                    <div className="card">
                        <div className="image">
                            <img src={item} alt="image" />
                        </div>
                        <div className="content">
                            <div className="header">${item}</div>
                            <div className="meta">${item}</div>
                            <div className="description">${item}</div>
                        </div>
                    </div>
                </div> */}
            </>
        );
    };


/* //     let [counter, setCounter] = useState(initial)

//     return (
//     <div className={"section-counter"}>

//         <p>(Img, Producto)</p>

//         <div className={"section-btn"}>
//             <button onClick={() => setCounter(--counter)}>-</button>
//             <input onChange={input => setCounter(input.value)} type="text" value={counter}/>
//             <button onClick={() => setCounter(++counter)}>+</button>
//         </div>

//         <button onClick={ () => onAdd(counter) } 
//         className= {'addToCart'}> Añadir producto </button>
//         { 
//         stock < counter ? <span> No hay mas stock, solo se puede añadir {stock}  </span>: <></> 
//         }

//     </div>
    
//     ); */

export default ItemCount;