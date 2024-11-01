import React, { useEffect, useState } from 'react';
import style from './footer.module.css';
import ROUTES from '../../Routes/routes';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import {firebase} from '../../firebase';

const Footer = () => {
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const url = await firebase.storage().ref('main/groot.webp').getDownloadURL();
        setLogoUrl(url); 
      } catch (error) {
        console.error('Error fetching profile photo:', error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <footer>
      <div className={style.footerAlign}>
        <img src={logoUrl} alt='logo' className={style.logo}/>
        <div className={style.footerMiddle}>
          <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? style.activeNav : ''}>Home</Link>
          <Link to={ROUTES.aboutme} className={location.pathname === ROUTES.aboutme ? style.activeNav : ''}>Over mij</Link>
          <Link to={ROUTES.cases} className={location.pathname === ROUTES.cases ? style.activeNav : ''}>Cases</Link>
          <Link to={ROUTES.blogs} className={location.pathname === ROUTES.blogs ? style.activeNav : ''}>Blogs</Link>
          <Link to={ROUTES.contact} className={location.pathname === ROUTES.contact ? style.activeNav : ''}>Contact</Link>
        </div>
        <a href='https://www.linkedin.com/in/bastiensarah/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} color='#668355'/></a>
      </div>
      <p className={style.copyright}>© 2024 Movim Management</p>
    </footer>
  );
};

export default Footer;
