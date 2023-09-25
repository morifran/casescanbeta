import React, {Component, useEffect, useState} from 'react'
import Characters from "../pics/Characters.svg"
import Google from "../pics/Google.svg"
import Facebook from "../pics/facebook.svg"
import Yandex from "../pics/Yandex.svg"
import Lock from "../pics/lock.svg"


const Authorization = ()=> {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [emailDirty, setEmailDirty] = useState(false)
        const [passwordDirty, setPasswordDirty] = useState(false)
        const [emailError, setEmailError] = useState('Введите корректные данные')
        const [passwordError, setPasswordError] = useState('Неправильный пароль')
        const [formValid, setFormValid] = useState(false)

        
        useEffect(()=>{
            if (emailError || passwordError) {
                setFormValid(false)
            } else {
                setFormValid(true)
                console.log("форма окей")
            }
        })

        const emailHandler =(e) => {
            setEmail(e.target.value)
            const re = /^[a-z_0-9\.]+$/;
            if (!re.test(String(e.target.value).toLowerCase())) {
                setEmailError('Введите корректные данные')
            } else {
                setEmailError("")
            }
        }

        const passwordHandler = (e) => {
            setPassword(e.target.value)
            if (e.target.value.length < 3 || e.target.value.length>100){
                setPasswordError('Пароль должен быть длинее 3')
                if(!e.target.value){
                    setPasswordError('Это обязательное поле')
                }
            } else {
                setPasswordError('')
            }
        }

        const blurHandler = (e) => {
            switch (e.target.name) {
                case 'email':
                    setEmailDirty(true)
                    break
                case 'password':
                    setPasswordDirty(true)
                    break
            }
        }
// воход в акк 



document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылку на кнопку
    const loginButton = document.getElementById("logInto");
  
    // Добавляем обработчик события на нажатие кнопки
    loginButton.addEventListener("click", function() {
        console.log("кнопка нажата"   )
      // Получаем значения из инпутов
      const login = document.querySelector(".email").value;
      const password = document.querySelector(".password").value;
      
      // Создаем объект с данными для запроса
      const requestData = {
        login: login,
        password: password
      };
  
      // Отправляем POST-запрос к API
      fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка сети или сервера");
        }
        return response.json();
      })
      .then(data => {
        // Обработка данных, полученных от API
        console.log("Успешный ответ от API:", data);
      })
      .catch(error => {
        console.error("Ошибка запроса:", error);
      });
    });
  });
  




        return(
            <div className='authorization'>
                
                <div className='decoration'>
                    <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
                    <img src={Characters} className='character none'/>
                </div>
                
                <div className='validation'>
                    
                    <div className='LogOrReg'> 
                    <div className='forLock'><img src={Lock} className='lock'></img></div>
                        <button className='underlinedLog'>Войти</button>
                        <button className='underlinedReg'>Зарегистрироваться</button>
                    </div>
                    <div className='registerBlank'>
                        <p className='registerP'>Логин или номер телефона:</p>
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" className='email'></input>
                        {(emailDirty && emailError) && <div className='error' style={{color:'red'}}>{emailError}</div>}
                        <p className='registerP'>Пароль:</p>
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' className='password' ></input>
                        {(passwordError && passwordDirty) && <div className='error' style={{color:'red'}}>{passwordError}</div>}
                        <button  type='submit' className='logInto' id='logInto'>Войти</button>
                        <a className='restorePassword' href='#'>Восстановить пароль</a>
                        <p className='registerP'>Войти через:</p>
                        <div className='socialMedia'>
                            <img src={Google}></img>
                            <img src={Facebook}></img>
                            <img src={Yandex}></img>
                        </div>
                    </div>
                </div>
                <img src={Characters} className='character None'></img>
            </div>
        );
    };



export default Authorization;