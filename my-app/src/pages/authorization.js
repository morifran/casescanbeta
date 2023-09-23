import React, {Component} from 'react'
import Characters from "../pics/Characters.svg"
import Google from "../pics/Google.svg"
import Facebook from "../pics/facebook.svg"
import Yandex from "../pics/Yandex.svg"

export default class Autorization extends Component {
    render(){
        return(
            <div className='authorization'>
                <div className='decoration'>
                    <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
                    <img src={Characters} className='character'/>
                </div>
                <div className='validation'>
                    <div className='LogOrReg'>
                        <button className='underlinedLog'>Войти</button>
                        <button className='underlinedReg'>Зарегистрироваться</button>
                    </div>
                    <div className='registerBlank'>
                        <p className='registerP'>Логин или номер телефона:</p>
                        <input className='email'></input>
                        <p className='registerP'>Пароль:</p>
                        <input className='password'></input>
                        <button className='logInto'>Войти</button>
                        <a className='restorePassword' href='#'>Восстановить пароль</a>
                        <p className='registerP'>Войти через:</p>
                        <div className='socialMedia'>
                            <img src={Google}></img>
                            <img src={Facebook}></img>
                            <img src={Yandex}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}