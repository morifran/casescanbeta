import logo from "../pics/scanlogo.png"
import menu from "../pics/menu.svg"

function Header() {
    return (<div className="headerDiv">
    <img src={logo} alt="Лого компании скан" className="logo"></img>
    <ul className="headerList none">
      <li><a>Главная</a></li>
      <li><a>Тарифы</a></li>
      <li><a>FAQ</a></li>
    </ul>
    <div className="userInfo"></div>
    <div className="regMenu none">
      <a className="register">Зарегистрироваться</a>
      <p className="rectangle">│</p>
      <button className="logIn">Войти</button>
    </div>
    <img src={menu} alt="изображение выпадающего меню" className="menu None"></img>
    </div>);
  }
  
  export default Header;