import React from 'react'
import { useParams } from 'react-router'
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'


const Category = () => {
    const params = useParams();
    
    return (
        <>
            <ItemListContainer categoryId={params.id} />
        </>
    )
}

export default Category
