import React from 'react';
import style from './button.module.css';

const Button = ({children, link}) => {
    return (
      <a href={link} className={style.button} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
};

export default Button;