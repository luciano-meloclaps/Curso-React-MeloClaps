import React from "react";
import Item from "../Items/Item";

//Recibimos "Item"
const ItemList = ({ items  }) => {
    return (
        <>
            {
                items.map((item, index) => (
                    <Item item={item} key={index} />
                ))  
            }
        </>
    )
}

export default ItemList