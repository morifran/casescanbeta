import React, { useState } from 'react';
import group from "../pics/Group.svg"
import document from "../pics/Document.svg"
import folders from "../pics/Folders.svg"
import {
    Nav
  } from "react-bootstrap"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Scan = () => {

    const [inputValue1, setInputValue1] = useState('');
    const [isValid1, setIsValid1] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [error, setError] = useState('');



    const handleChange1 = (e) => {
      const value = e.target.value;
      const isValidInput = /^\d{10}$/.test(value);
      setIsValid1(isValidInput);
      setInputValue1(value);
    };
    const [inputValue2, setInputValue2] = useState('');
    const [isValid2, setIsValid2] = useState(true);
  
    const handleChange2 = (e) => {
      const value = e.target.value;
      const isValidInput = /^[1-9]\d{0,2}$|^1000$/.test(value);
      setIsValid2(isValidInput);
      setInputValue2(value);
    };
  
    const handleStartDateChange = (date) => {
      if (date > new Date()) {
        setError('Введите корректные данные');
      } else if (date > endDate) {
        setError('Введите корректные данные');
      } else {
        setStartDate(date);
        setError('');
      }
    };
  
    const handleEndDateChange = (date) => {
      if (date > new Date()) {
        setError('Введите корректные данные');
      } else if (date < startDate) {
        setError('Введите корректные данные');
      } else {
        setEndDate(date);
        setError('');
      }
    };


        return(
            <div className='scan'>
                <div>
                    <div className='dscr'>
                        <h2>Найдите необходимые данные в пару кликов.</h2>  
                        <p className='commonText'>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
                    </div>
                    <div className='searchCard'>
                        <div className='fstPart'>
                            <p>ИНН компании*</p>
                            <input
                                type="text"
                                placeholder="10 цифр"
                                id="numbers"
                                value={inputValue1}
                                onChange={handleChange1}
                              />
                              {!isValid1 && (
                                <p style={{ color: 'red' }}>Введите корректные данные</p>
                              )}
                            <p>Тональность</p>
                            <select id='reviews'>
                              <option>Любая</option>
                              <option>Негативная</option>
                              <option>Позитивная</option>
                            </select>
                            <p>Количество документов в выдаче*</p>
                            <input
                               type="text"
                               placeholder="От 1 до 1000"
                               id="quantity"
                               value={inputValue2}
                               onChange={handleChange2}
                             />
                             {!isValid2 && (
                               <p style={{ color: 'red' }}>Введите число от 1 до 1000.</p>
                             )}
                            <p>Диапозон поиска*</p>
                            <div className='forDate'>
                            <div className='input-container'>
                                <label>Дата начала:</label>
                                <DatePicker
                                  selected={startDate}
                                  onChange={handleStartDateChange}
                                  dateFormat="yyyy-MM-dd"
                                  placeholderText="Выберите дату начала"
                                />
                              </div>
                              <div className='input-container'>
                                <label>Дата конца:</label>
                                <DatePicker
                                  selected={endDate}
                                  onChange={handleEndDateChange}
                                  dateFormat="yyyy-MM-dd"
                                  placeholderText="Выберите дату конца"
                                />
                              </div>
                              {error && <div id='error'>{error}</div>}
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