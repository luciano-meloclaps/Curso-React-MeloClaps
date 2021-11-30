import React, { useEffect } from 'react';

//CSS
import './ItemListContainer.css'

//COMPONENTE ITEMS (CARD) 
import ItemList from '../ItemList/ItemList';
import { useState } from 'react/cjs/react.development';

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      
      fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1276')
        .then(response => response.json())
        .then(respJSON => { console.log(respJSON.results); setItems(respJSON.results)})
        .catch(error => console.log("Error", error))
    }, 2000)
  }, [])

  return (
    <div>
      <ItemList items={items} />
    </div>
  )
}

  // const[items, setItems] = useState ([])

  // console.log('State', items);

  // useEffect(() => {
  //   fetch("https://api.mercadolibre.com/MLA/search?category=MLA5726")
  //   .then((response) =>  response.json())
  //   .then((json) => setItems(json))
  // }, []);

//   return (

//     <div>
//         <>
//           {items.map((item) => {
//             return <Item data={item} key={item.id} />;
//           })}
//         </>
      

//   {/* Mandamos todos los items */
//       <>
//         <ItemList items={item} />
//       </>

//     </div>
//   );
// }

export default ItemListContainer