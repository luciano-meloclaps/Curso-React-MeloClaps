import React from "react";
import Item from "../Items/Item";

//Recibimos "Item"
const ItemList = ({items}) => {
    return (
        //Mapear
        <>
            {
                items.map((item) => (
                    <Item item={item} key={item.id} />
                ))  
            }
        </>
    )
}

export default ItemList