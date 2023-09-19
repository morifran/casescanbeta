import TechGuy from "../pics/TechGuy.svg"


function Main() {
    return (
     <div className="container">
        <div className="description">
            <h2>сервис по поиску публикаций о компании по его ИНН</h2>
            <p className="commonText">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            <div className="butDiv"><button className="requestBut None">Запросить данные</button></div>
        </div>
        <div className="imgDiv">
            <img src={TechGuy} alt="Гик" className="TechGuy"></img>
        </div>
     </div>
    );
  }
  
  export default Main;