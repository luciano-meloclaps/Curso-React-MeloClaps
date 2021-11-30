import React from 'react'

const ItemDetail = ({ item }) => {
    return (
        <div>
            <img src={item.thumbnail} alt={item.title} width={300} />
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
        </div>
    )
}

export default ItemDetail
