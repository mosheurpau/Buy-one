import React from 'react';

const Product = ({product}) => {
    const {name, price, img} = product;
    return (
        <div>
            <img src={img} alt=""></img> 
            <div>
                <p>{name}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Product;