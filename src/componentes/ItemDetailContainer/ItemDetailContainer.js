import React, {useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const ItemDetailContainer = () => {
    let id = useParams();

    let productID =  id.id;

    const [item, setItem] = useState([])


    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/todos/${productID}`).then((res) =>
            setItem(res.data)
            
            );
    console.log(productID)
    }, [productID]);


    return (

        <>
        <ItemDetail item={item} />
        </>
        
    )
}

export default ItemDetailContainer

