import React, { Component } from "react";
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

function Header() {

    return (<><div className="headerDiv">
    <img src={logo} alt="Лого компании скан" className="logo"></img>
    <ul className="headerList none">
      <li><Nav.Link href="/" className="link">Главная</Nav.Link></li>
      <li><Nav.Link href="#" className="link">Тарифы</Nav.Link></li>
      <li><Nav.Link href="#" className="link">FAQ</Nav.Link></li>
    </ul>
    <div className="companiesInfo None none">
      <p className="smallText">Использовано компаний</p>
      <p className="companyCount">34</p>
      <p className="smallText">Лимит по компаниям </p>
      <p className="companyLimit">100</p>
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