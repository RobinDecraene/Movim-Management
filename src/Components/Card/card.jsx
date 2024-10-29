import React from 'react';
import style from './card.module.css';
import placeholder from './placeholder.jpg'
import SmallestTitle from '../SmallestTitle/smallesttitle';

const Card = ({ link, altImg, title, children, date}) => {
    return (
      <a href={link} className={style.card}>
        <img className={style.cardImg} src={placeholder} alt={altImg}/>
        <div className={style.cardText}>
          <SmallestTitle>{title}</SmallestTitle>
          <p>{children}</p>
          <p className={style.cardDate}>{date}</p>
        </div>

      </a>
    );
};

export default Card;