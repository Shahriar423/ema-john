import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="all-product">
                <h3 className="product-name">{name}</h3>
                <small>By {seller}</small>
                <p>${price}</p>
                <small>Only <b>{stock}</b> left in stock -Order Soon</small>
                <br></br>
                <button className="order-btn">add to cart</button>
            </div>
        </div>
    );
};

export default Product;