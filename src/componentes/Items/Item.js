import React from 'react'

const Item = ({ item }) => {
    // <div className="ItemListContainer">
        return (
            <>
                <div className="ui cards">
                    <div className="card">
                        <div className="image">
                            <img src={item.thumbnail} alt="imagen" />
                        </div>
                        <div className="content">
                            <div className="header">{item.price}</div>
                            <div className="meta">{item.category_id}</div>
                            <div className="description">{item.title}</div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Item