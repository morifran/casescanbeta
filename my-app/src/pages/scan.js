import React, { createContext, useContext, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import group from "../pics/Group.svg";
import document from "../pics/Document.svg";
import { useNavigate } from 'react-router-dom';
import folders from "../pics/Folders.svg"

export const SliderDataContext = createContext();

const Scan = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [isValid1, setIsValid1] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState('');
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [selectedTonality, setSelectedTonality] = useState('any');
  const [inputValue2, setInputValue2] = useState('');
  const [isValid2, setIsValid2] = useState(true);
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const [searching, setSearching] = useState(false);
  

  const handleSearch = async () => {
    setSearchButtonClicked(true);
    setSearching(true);

    const accessToken = localStorage.getItem('accessToken');

    const requestData = {
      intervalType: 'month',
      histogramTypes: ['totalDocuments', 'riskFactors'],
      issueDateInterval: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: 'company',
              sparkId: null,
              entityId: null,
              inn: parseInt(inputValue1),
              maxFullness: true,
              inBusinessNews: null,
            },
          ],
          onlyMainRole: true,
          tonality: selectedTonality,
          onlyWithRiskFactors: false,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true,
      },
      similarMode: 'duplicates',
      limit: parseInt(inputValue2),
      sortType: 'sourceInfluence',
      sortDirectionType: 'desc',
    };

    const fetchAndSetData = async () => {
      try {
        const response = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
          method: 'POST',
          headers: requestData.headers,
          body: JSON.stringify(requestData),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setData(data);
          console.log(Data)
          navigate('/content');
        } else {
          console.log("err");
        }
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
      } catch (error) {
        if (error.message === 'Unauthorized') {
          console.error('Ошибка авторизации. Пожалуйста, войдите с правильным токеном.');
        } else {
          console.error(error);
        }
        setSearching(false);
      }
    };

    fetchAndSetData();
  };




  const handleChange1 = (e) => {
    const value = e.target.value;
    const isValidInput = /^\d{10}$/.test(value);
    setIsValid1(isValidInput);
    setInputValue1(value);
  };

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

  return (
    <div className="scan">
      <div>
        <div className="dscr">
          <h2>Найдите необходимые данные в пару кликов.</h2>
          <p className="commonText">Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
        </div>
        <div className="searchCard">
          <div className="fstPart">
            <p>ИНН компании*</p>
            <input
              type="text"
              placeholder="10 цифр"
              id="numbers"
              value={inputValue1}
              onChange={handleChange1}
            />
            {!isValid1 && <p style={{ color: 'red' }}>Введите корректные данные</p>}
            <p>Тональность</p>
            <select
              id="reviews"
              value={selectedTonality}
              onChange={(e) => setSelectedTonality(e.target.value)}
            >
              <option value="any">Любая</option>
              <option value="negative">Негативная</option>
              <option value="positive">Позитивная</option>
            </select>
            <p>Количество документов в выдаче*</p>
            <input
              type="text"
              placeholder="От 1 до 1000"
              id="quantity"
              value={inputValue2}
              onChange={handleChange2}
            />
            {!isValid2 && <p style={{ color: 'red' }}>Введите число от 1 до 1000.</p>}
            <p>Диапазон поиска*</p>
            <div className="forDate">
              <div className="input-container">
                <label>Дата начала:</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Выберите дату начала"
                />
              </div>
              <div className="input-container">
                <label>Дата конца:</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Выберите дату конца"
                />
              </div>
              {error && <div id="error">{error}</div>}
            </div>
            <button className="search None" onClick={handleSearch} disabled={searching}>
              Поиск
            </button>
          </div>
          <div className='scndPart none'>
            <input type="checkbox" className="custom-checkbox" id="1" name="1" value="yes" />
            <label htmlFor="1">Признак максимальной полноты</label>
            <input type="checkbox" className="custom-checkbox" id="2" name="2" value="yes" />
            <label htmlFor="2">Упоминания в бизнес-контексте</label>
            <input type="checkbox" className="custom-checkbox" id="3" name="3" value="yes" />
            <label htmlFor="3">Главная роль в публикации</label>
            <input type="checkbox" className="custom-checkbox" id="4" name="4" value="yes" />
            <label htmlFor="4">Публикации только с риск-факторами</label>
            <input type="checkbox" className="custom-checkbox" id="5" name="5" value="yes" />
            <label htmlFor="5">Включать технические новости рынков</label>
            <input type="checkbox" className="custom-checkbox" id="6" name="6" value="yes" />
            <label htmlFor="6">Включать анонсы и календари</label>
            <input type="checkbox" className="custom-checkbox" id="7" name="7" value="yes" />
            <label htmlFor="7">Включать сводки новостей</label>
            <button className='search' onClick={handleSearch} disabled={searching}>Поиск</button>
            <p className='required'>* Обязательные к заполнению поля</p>
          </div>
        </div>
      </div>
      <div>
        <div className='forFolders'>
          <img src={document} alt="Document" />
          <img className='none' src={folders} alt="Folders" />
        </div>
        <img className='group' src={group} alt="Group" />
      </div>
    </div>
  );
};

export default Scan;
