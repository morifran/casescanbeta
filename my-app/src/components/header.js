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
      <a className="logIn">Войти</a>
    </div>
    <nav>
    <ul className="dropdown None"><li><img src={menu} alt="изображение выпадающего меню" className="menu None"></img>
    <ul className="dropdown-menu None">
      <li><a>Главная</a></li>
      <li><a>Тарифы</a></li>
      <li><a>FAQ</a></li>
       <a className="reg">Зарегистрироваться</a>
       <button>Войти</button>
      </ul></li></ul>
      </nav>
    </div>);
  }
  
  export default Header;