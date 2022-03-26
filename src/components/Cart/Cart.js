import React, { useState } from 'react';
import ChooseOne from '../ChooseOne/ChooseOne';
import SelectItem from '../SelectItem/SelectItem';

const Cart = ({cart}) => {
    // const {name, img} = cartItem;
    // console.log(props.cart.name);
    const [oneCart, setOneCart] = useState([]);

    const handleChooseOneToCart = (cart) => {
        // console.log(cart.length);
        let x = Math.floor((Math.random() * cart.length));
        setOneCart(cart[x]);
        console.log(cart[x], x);
    }
    

    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            {
               cart.map( item => <SelectItem key={item.id} selectedItem={item}></SelectItem> )
            }
            <h2>Choose One Product</h2>
            {
                <ChooseOne oneCart={oneCart}></ChooseOne>
            }
            <button onClick={ () => handleChooseOneToCart(cart) }>CHOOSE 1 FOR ME</button> <br/>
            <button>CHOOSE AGAIN</button>
        </div>
        
        
    );
};

export default Cart;