import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const ItemListContainer = ({img, name, description}) => (
  <div className="ItemListContainer">
    <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
  </div>
);

export default ItemListContainer