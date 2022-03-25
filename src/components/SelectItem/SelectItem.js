import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SelectItem.css'
const SelectItem = ({selectedItem}) => {
    return (
        <div className='selected-item'>
            <img src={selectedItem.img} alt="" />
            <p>{selectedItem.name}</p>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default SelectItem;