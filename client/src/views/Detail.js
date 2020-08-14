import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    };
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {removeFromDom(productId)})
    };
    return (
        <div>
            <h1>Product Details:</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button><Link to={"/products/" + product._id + "/edit"}>Edit</Link></button><br/><br/>
            <button className='delete-button' onClick={(e)=>{deleteProduct(product._id)}}><Link to={ '/products' }>Delete</Link></button><br/><br/>
            <button><Link to={ '/products' }>Home</Link></button>
        </div>
    )
}
