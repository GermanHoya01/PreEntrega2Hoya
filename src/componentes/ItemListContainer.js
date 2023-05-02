import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} =useParams ()

    useEffect ( () => {
        const asyncFunc = categoryId ? getProducts : getProducts

        asyncFunc(categoryId)
        .then(response => {
                setProducts(response)   
    })
    .catch(error => {
        console.error(error)
    })

}, [categoryId])

return (
        <div className="greeting-div">
            <h2 className="greeting-h2">{greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;


