import React from 'react';
import style from './title.module.css';

const Title = ({ children}) => {
    return (
      <h2>{children}</h2>
    );
};

export default Title;