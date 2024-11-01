import React from 'react';
import style from './button.module.css';

const SecondaireButton = ({children, link}) => {
    return (
      <a href={link} className={style.secondaireButton} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
};

export default SecondaireButton;