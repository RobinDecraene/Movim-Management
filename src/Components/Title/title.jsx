import React from 'react';
import style from './title.module.css';

const Title = ({ children, customClass}) => {
    return (
      <h2 className={`${style.section} ${customClass}`}>{children}</h2>
    );
};

export default Title;