import React, {Component} from 'react'
import group from "../pics/Group.svg"
import document from "../pics/Document.svg"
import folders from "../pics/Folders.svg"
import {
    Nav
  } from "react-bootstrap"


const Scan = () => {
        return(
            <div className='scan'>
                <div>
                    <div className='dscr'>
                        <h2>Найдите необходимые данные в пару кликов.</h2>  
                        <p className='commonText'>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
                    </div>
                    <div className='searchCard'>
                        <div className='fstPart'>
                            <p>ИНН компании</p>
                            <input placeholder='10 цифр' id="numbers"></input>
                            <p>Тональность</p>
                            <select id='reviews'>
                              <option>Любая</option>
                              <option>Негативная</option>
                              <option>Позитивная</option>
                            </select>
                            <p>Количество документов в выдаче</p>
                            <input placeholder='От 1 до 1000' id='quantity'></input>
                            <p>Диапозон поиска</p>
                            <div className='forDate'> 
                                <select placeholder='Дата начала' className='date'>
                                    <option>какой-то день</option>
                                    <option>какой-то другой день</option>
                                </select>
                                <select placeholder='Дата конца' className='date'>
                                    <option>какой-то день</option>
                                    <option>какой-то другой день</option>
                                </select>
                            </div>
                            <Nav.Link href="/content" className='None'><button className='search'>Поиск</button></Nav.Link>
                        </div>
                        <div className='scndPart none'>
                        <input type="checkbox" className="custom-checkbox" id="1" name="1" value="yes"/>
                        <label htmlFor="1">Признак максимальной полноты</label>
                        <input type="checkbox" className="custom-checkbox" id="2" name="2" value="yes"/>
                        <label htmlFor="2">Упоминания в бизнес-контексте</label>
                        <input type="checkbox" className="custom-checkbox" id="3" name="3" value="yes"/>
                        <label htmlFor="3">Главная роль в публикации</label>
                        <input type="checkbox" className="custom-checkbox" id="4" name="4" value="yes"/>
                        <label htmlFor="4">Публикации только с риск-факторами</label>
                        <input type="checkbox" className="custom-checkbox" id="5" name="5" value="yes"/>
                        <label htmlFor="5">Включать технические новости рынков</label>
                        <input type="checkbox" className="custom-checkbox" id="6" name="6" value="yes"/>
                        <label htmlFor="6">Включать анонсы и календари</label>
                        <input type="checkbox" className="custom-checkbox" id="7" name="7" value="yes"/>
                        <label htmlFor="7">Включать сводки новостей</label>
                        <Nav.Link href="/content"><button className='search'>Поиск</button></Nav.Link>
                        <p className='required'>* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </div>
                    <div>
                        <div className='forFolders'>
                            <img src={document}/>
                            <img  className='none' src={folders}/>
                        </div>
                        <img className='group' src={group}/>
                    </div>
            </div>
        )
    }




export default Scan;