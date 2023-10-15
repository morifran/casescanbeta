import React, { useState, useEffect } from 'react';
import {
  Nav
} from "react-bootstrap"
import logo from "../pics/scanlogo.png"
import menu from "../pics/menu.svg"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './footer';
import Main from "../pages/main";
import Content from "../pages/content";
import Autorization from "../pages/authorization";
import Scan from "../pages/scan"
import axios from 'axios';

function Header() {
  
  const [companyCount, setCompanyCount] = useState(null);
  const [companyLimit, setCompanyLimit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      setError('Access Token не найден');
      return;
    }

    axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        const data = response.data;
        setCompanyCount(data.eventFiltersInfo.usedCompanyCount);
        setCompanyLimit(data.eventFiltersInfo.companyLimit);
      })
      .catch((error) => {
        setError(error.response ? error.response.data.message : 'Произошла ошибка');
      });
  }, []);

    return (
    <><div className="headerDiv">
    <img src={logo} alt="Лого компании скан" className="logo"></img>
    <ul className="headerList none">
      <li><Nav.Link href="/" className="link">Главная</Nav.Link></li>
      <li><Nav.Link href="#" className="link">Тарифы</Nav.Link></li>
      <li><Nav.Link href="#" className="link">FAQ</Nav.Link></li>
    </ul>
    <div className="companiesInfo None none">
      {error ? (
        <p className="errorText">{error}</p>
      ) : (
        <>
          <p className="smallText">Использовано компаний</p>
          <p className="companyCount">{companyCount}</p>
          <p className="smallText">Лимит по компаниям</p>
          <p className="companyLimit">{companyLimit}</p>
        </>
      )}
    </div>
    <div className="regMenu none">
      <a className="register">Зарегистрироваться</a>
      <p className="rectangle">│</p>
      <Nav.Link href="/authorization" className="logIn link">Войти</Nav.Link>
    </div>
    <div className="userInfo None none">
      <div className="nickname">
        <p className="userName">Алёша О.</p>
      <button className="leave">Выйти</button>
      </div>
      <div className="forPfp">
      </div>
    </div>
    <nav>
    <ul className="dropdown None"><li><img src={menu} alt="изображение выпадающего меню" className="menu None"></img>
    <ul className="dropdown-menu None">
      <li><Nav.Link href="/" className="link">Главная</Nav.Link></li>
      <li><Nav.Link href="#" className="link">Тарифы</Nav.Link></li>
      <li><Nav.Link href="#" className="link">FAQ</Nav.Link></li>
       <a className="reg">Зарегистрироваться</a>
       <Nav.Link href="/authorization" className="logInMobile link">Войти</Nav.Link>
      </ul></li></ul>
      </nav>
    </div>
    
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>  
        <Route path="/authorization" element={<Autorization/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/scan" element={<Scan/>}/>
      </Routes>
    </Router>
    <Footer />
    </>);
  }
  
  export default Header;