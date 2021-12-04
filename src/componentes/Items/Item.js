import React from 'react'
import { useNavigate } from 'react-router'
import "../Items/Item.css"
import { Button, Icon } from 'semantic-ui-react'

const Item = ({ item }) => {
    // <div className="ItemListContainer">
    const navigate = useNavigate() 
        return (
            <div className="card-item">
                <div className="ui cards item.card " onClick={() => navigate(`/item/${item.id}`)}>
                    <div className="card">
                        <div className="image">
                            <img src={item.thumbnail} alt="imagen" />
                        </div>
                        <div className="content">
                            <div className="header">${item.price}</div>
                            <div className="meta">{item.category_id}</div>
                            <div className="description">{item.title}</div>
                            <Button animated='vertical'>
                            <Button.Content hidden>Shop</Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' />
                            </Button.Content>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Item