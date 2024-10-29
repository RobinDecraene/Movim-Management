import React from 'react';
import style from './footer.module.css';
import ROUTES from '../../Routes/routes';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <div className={style.footerAlign}>
        <div>
          <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? style.activeNav : ''}>Home</Link>
          <Link to={ROUTES.aboutme} className={location.pathname === ROUTES.aboutme ? style.activeNav : ''}>Over mij</Link>
          <Link to={ROUTES.cases} className={location.pathname === ROUTES.cases ? style.activeNav : ''}>Cases</Link>
          <Link to={ROUTES.blogs} className={location.pathname === ROUTES.blogs ? style.activeNav : ''}>Blogs</Link>
          <Link to={ROUTES.contact} className={location.pathname === ROUTES.contact ? style.activeNav : ''}>Contact</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;