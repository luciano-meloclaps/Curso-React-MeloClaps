import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import "./ItemListContainer.css" 

const ItemListContainer = ({img, name, description, mod}) => (
  <div className="ItemListContainer">
    <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {mod}
      </a>
    </Card.Content>
  </Card>
  </div>
);

export default ItemListContainer