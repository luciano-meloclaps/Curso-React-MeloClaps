import './ItemListContainer.css'

//COMPONENTE ITEM COUNT
import ItemCount from "../ItemCount/ItemCount";

//COMPONENTE ITEMS (CARD) 
import Item from '../Items/Item';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
  const addToCart = (qty) => {
    let prod;
    qty > 1 ? prod = 'productos' : prod = 'productos';
    alert(`Ingresaste ${qty} ${prod} al carrito`)
  }
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={0} onAdd={addToCart} />
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