import React, { useState } from 'react';
import ChooseOne from '../ChooseOne/ChooseOne';
import SelectItem from '../SelectItem/SelectItem';

const Cart = ({cart, handleChooseAgain}) => {
    const [oneCart, setOneCart] = useState([]);

    const handleChooseOneToCart = (cart) => {
        if(cart.length) {
            let x = Math.floor((Math.random() * cart.length));
            console.log(cart[x]);
            const chooseOne = [cart[x]];
            setOneCart(chooseOne);
            console.log(chooseOne);
        }
        else {
            setOneCart([]);
        }
    }
    

    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            {
               cart.map( item => <SelectItem key={item.id} selectedItem={item}></SelectItem> )
            }
            <h2>Choose One Product</h2>
            {
                oneCart.map(one => <ChooseOne key={one.id} oneCart={one}></ChooseOne>)
            }
            <button onClick={ () => handleChooseOneToCart(cart)}>CHOOSE 1 FOR ME</button> <br/>
            <button onClick={handleChooseAgain}>CHOOSE AGAIN</button>
        </div>
        
        
    );
};

export default Cart;