import React from 'react';
import style from './input.module.css';

const Input = ({placeholder, customClass}) => {
    return (
      <input className={customClass} placeholder={placeholder}/>
    );
};

export default Input;

