import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'

//COMPONENTE ITEM COUNT
import ItemCount from "../ItemCount/ItemCount";

//COMPONENTE ITEMS (CARD) 
import Items from '../Items/Items';

const ItemListContainer = () => {
  const[items, setItems] = useState ([])

  console.log('State', items);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) =>  response.json())
    .then((json) => setItems(json))
  }, []);

  return (
    <div>
      {items.map((items) => {
        return <Items data={items} key={items.id} />;
      })}
    </div>
  );

  let counterItem = 1
  let stock = 6

  const onAdd = counter => {
    stock >= counter ? counterItem = counter : counterItem = 0
  }

  return (
    <main>
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
    </main>
  ) 

}

export default ItemListContainer