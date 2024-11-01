import React, { useEffect, useState } from 'react';
import style from './header.module.css';
import ROUTES from '../../Routes/routes';
import { Link, useLocation } from 'react-router-dom';
import {firebase} from '../../firebase';


const Header = () => {
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);


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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? style.scrolled : ''}>
      <nav>
        <a href="/" className={style.name}><img src={logoUrl} alt='logo' className={style.logo}/></a>
        <div className={style.navRight}>
          <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? style.activeNav : ''}>Home</Link>
          <Link to={ROUTES.aboutme} className={location.pathname === ROUTES.aboutme ? style.activeNav : ''}>Over mij</Link>
          <Link to={ROUTES.cases} className={location.pathname === ROUTES.cases ? style.activeNav : ''}>Cases</Link>
          <Link to={ROUTES.blogs} className={location.pathname === ROUTES.blogs ? style.activeNav : ''}>Blogs</Link>
          <Link to={ROUTES.contact} className={location.pathname === ROUTES.contact ? style.activeNav : ''}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
