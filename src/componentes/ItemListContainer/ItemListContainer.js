import React from 'react';
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";

// import { Card, Icon, Image } from 'semantic-ui-react'
// const ItemListContainer = ({img, name, description, mod}) => (
//   <div className="ItemListContainer">
//     <Card>
//     <Image src={img} wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>{name}</Card.Header>
//       <Card.Description>
//         {description}
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         {mod}
//       </a>
//     </Card.Content>
//   </Card>
//   </div>

const ItemListContainer = () => {

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
};

export default ItemListContainer