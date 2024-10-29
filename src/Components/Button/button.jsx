import React from 'react';
import style from './button.module.css';

const Button = ({children, link}) => {
    return (
      <button href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </button>
    );
};

export default Button;