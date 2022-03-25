import React from 'react';
import SelectItem from '../SelectItem/SelectItem';

const Cart = ({cart}) => {
    // const {name, img} = cartItem;
    // console.log(props.cart.name);
    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            {
               cart.map( item => <SelectItem key={item.id} selectedItem={item}></SelectItem> )
            }
            <button>CHOOSE 1 FOR ME</button> <br/>
            <button>CHOOSE AGAIN</button>
        </div>
        
    );
};

export default Cart;