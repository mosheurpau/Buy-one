import React from 'react';
import './ChooseOne.css'
const ChooseOne = ({oneCart}) => {
    console.log(oneCart);
    return (
        <div className='oneChoose'>
            <img src={oneCart.img} alt=""></img>
            <p>{oneCart.name}</p>
        </div>
    );
};

export default ChooseOne;