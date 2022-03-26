import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ChooseOne.css'
const ChooseOne = ({oneCart}) => {
    console.log(oneCart);
    return (
        <div className='oneChoose'>
            <img src={oneCart.img} alt="" />
            <p>{oneCart.name}</p>
        </div>
    );
};

export default ChooseOne;