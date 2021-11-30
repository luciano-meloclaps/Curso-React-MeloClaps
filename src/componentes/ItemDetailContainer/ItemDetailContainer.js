import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=Nike&limit=1')
                .then(response => response.json())
                .then(respJSON => { setItem(respJSON.results[0]); console.log(respJSON.results[0]); })
                .catch(error => console.log("Error", error))
        }, 2000)
    }, [])

    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer

