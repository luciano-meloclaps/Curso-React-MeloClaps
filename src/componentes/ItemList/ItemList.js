import React from "react";
import Item from "../Items/Item";


//Recibimos "Item"
const ItemList = ({ items  }) => {

    return (
        <div className="container-itemsList">
            {
                items.map((item, index) => (
                    <Item item={item} key={index} />
                ))  
            }
        </div>
    )
}

export default ItemList