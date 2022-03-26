import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SelectItem.css'
const SelectItem = ({selectedItem, handleRemoveItem}) => {
    const {name, img, id} = selectedItem;
    

    return (
        <div className='selected-item'>
            <img src={img} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon onClick={ () => handleRemoveItem(selectedItem)} icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default SelectItem;