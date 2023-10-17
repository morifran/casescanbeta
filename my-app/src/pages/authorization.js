import React, { useEffect, useState } from 'react';
import Characters from '../pics/Characters.svg';
import Google from '../pics/Google.svg';
import Facebook from '../pics/facebook.svg';
import Yandex from '../pics/Yandex.svg';
import Lock from '../pics/lock.svg';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Введите корректные данные');
  const [passwordError, setPasswordError] = useState('Неправильный пароль');
  const [formValid, setFormValid] = useState(false);
  const [logIn, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const expire = localStorage.getItem('expire');
    
    if (accessToken && expire && new Date(expire) > new Date()) {
      document.querySelector(".regMenu").classList.add("None")
      document.querySelector(".userInfo").classList.remove("None")
      document.querySelector(".companiesInfo").classList.remove("None")
      document.querySelector(".companiesInfo").classList.remove("none")
      navigate('/scan');
    }
  }, [navigate]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-z_0-9\.]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Введите корректные данные');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 100) {
      setPasswordError('Пароль должен быть длинее 3');
      if (!e.target.value) {
        setPasswordError('Это обязательное поле');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const handleLogin = async () => {
    if (formValid) {
      try {
        const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: email,
            password: password,
          }),
        });

        if (response.ok) {
          setLogin(true)
          document.querySelector(".regMenu").classList.add("None")
          document.querySelector(".userInfo").classList.remove("None")
          document.querySelector(".companiesInfo").classList.remove("None")
          document.querySelector(".companiesInfo").classList.remove("none")
          
          setPasswordError('');
          navigate('/scan');
          
          const data = await response.json();
          const { accessToken, expire } = data;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('expire', expire);
          console.log(accessToken)
          console.log(expire)
        }
      } catch (error) {
        setLogin(false)
        console.error('Ошибка при выполнении запроса к API:', error);
      }
    }
  };

  return (
    <div className="authorization">
      <div className="decoration">
        <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
        <img src={Characters} className="character none" alt="Character" />
      </div>

      <div className="validation">
        <div className="LogOrReg">
          <div className="forLock">
            <img src={Lock} className="lock" alt="Lock" />
          </div>
          <button className="underlinedLog">Войти</button>
          <button className="underlinedReg">Зарегистрироваться</button>
        </div>
        <div className="registerBlank">
          <p className="registerP">Логин или номер телефона:</p>
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            name="email"
            type="text"
            className="email"
          />
          {emailDirty && emailError && (
            <div className="error" style={{ color: 'red' }}>
              {emailError}
            </div>
          )}
          <p className="registerP">Пароль:</p>
          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            className="password"
          />
          {passwordError && passwordDirty && (
            <div className="error" style={{ color: 'red' }}>
              {passwordError}
            </div>
          )}
          <button type="submit" className="logInto" onClick={handleLogin}>
            Войти
          </button>
          <a className="restorePassword" href="#">
            Восстановить пароль
          </a>
          <p className="registerP">Войти через:</p>
          <div className="socialMedia">
            <img src={Google} alt="Google" />
            <img src={Facebook} alt="Facebook" />
            <img src={Yandex} alt="Yandex" />
          </div>
        </div>
      </div>
      <img src={Characters} className="character None" alt="Character" />
    </div>
  );
};

export default Authorization;