import React, { useEffect, useState } from 'react';

//CSS
import './ItemListContainer.css'

//COMPONENTE ITEMS (CARD) 
import ItemList from '../ItemList/ItemList';  

const ItemListContainer = ({ categoryId }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=3`)
        .then(response => response.json())
        .then(respJSON => { console.log(respJSON.results); setItems(respJSON.results)})
        .catch(error => console.log("Error", error))
    }, 2000)
  }, [categoryId])

  return (
    <div>
      <h1>{categoryId}</h1>
      {/* {
        items.lenght > 0 ?
          <ItemList items={items} />
          :
          <h5>Cargando...</h5>
      } */}
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer