import React from 'react';
import style from './button.module.css';

const Button = ({children, link, customClass}) => {
    return (
      <a href={link} className={`${style.button} ${customClass}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
};

export default Button;