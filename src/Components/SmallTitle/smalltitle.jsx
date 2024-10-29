import React from 'react';
import style from './smalltitle.module.css';

const SmallTitle = ({ children}) => {
    return (
      <h3>{children}</h3>
    );
};

export default SmallTitle;