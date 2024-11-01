import React from 'react';
import style from './input.module.css';

const Input = ({placeholder, customClass}) => {
    return (
      <input className={`${style.section} ${customClass}`} placeholder={placeholder}/>
    );
};

export default Input;

