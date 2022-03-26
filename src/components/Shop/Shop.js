import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    console.log(cart.length);
    const handleAddToCart = (selectedProduct) => {
        if (cart.length < 4) {
            let newCart = [...cart, selectedProduct]
            setCart(newCart); 
        }  
        else {
            alert("You can't select more than 4");
        }
    };
    

    const handleChooseAgain = () => {
        let ChooseCart = [];
        setCart(ChooseCart);
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                {
                 <Cart
                 handleChooseAgain = {handleChooseAgain}
                 cart={cart}
                 ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;