import React from 'react';
import style from './input.module.css';


const Text = ({placeholder}) => {
  return (
    <textarea placeholder={placeholder}/>
  );
};

export default Text;