import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import ROUTES from './Routes/routes';
import './App.css';

import Home from './Pages/Home/home';
import Blogs from './Pages/Blogs/blogs';
import AboutMe from './Pages/AboutMe/aboutme';
import Cases from './Pages/Cases/cases';
import Contact from './Pages/Contact/contact';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={ROUTES.home} element={<Home/>} />
        <Route path={ROUTES.aboutme} element={<AboutMe/>} /> 
        <Route path={ROUTES.cases} element={<Cases/>} /> 
        <Route path={ROUTES.blogs} element={<Blogs/>} /> 
        <Route path={ROUTES.contact} element={<Contact/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

