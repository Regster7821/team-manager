import React from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {removeFromDom(productId)})
    };
    return (
        <div>
            <h1>All products:</h1>
            {props.products.map((product, idx)=>{
                return <p>
                        <Link className='product' to={`/products/${product._id}`}>{product.title}</Link>
                        <button className='delete-button' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                       </p>
            })}
        </div>
    )
};
