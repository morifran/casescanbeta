import TechGuy from "../pics/TechGuy.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import clock from "../pics/clocks.png"
import 'swiper/css/navigation';
import guySvg from "../pics/guySvg.svg"
import galochka from "../pics/галочка.svg"
import bulb from "../pics/bulb.svg"
import target from "../pics/target.svg"
import mac from "../pics/mac.svg"

function Main() {
    return (<>
     <div className="container">
        <div className="description">
            <h2>сервис по поиску публикаций о компании по его ИНН</h2>
            <p className="commonText">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            <div className="butDiv"><button className="requestBut none None">Запросить данные</button></div>
        </div>
        
            <img src={TechGuy} alt="Гик" className="TechGuy"></img>
        
        
     </div>
    <h2 className="whyUs">Почему именно мы</h2>
     <div className="Swiper none">
     <Swiper
      modules={[Navigation]}     
      spaceBetween={30}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="card"><img src={clock} alt="картинка часов" className="smallPic"></img><p className="cardTxt">Высокая и оперативная скорость обработки заявки</p></div></SwiperSlide> 
      <SwiperSlide><div className="card"><img src={clock} alt="картинка лупы" className="smallPic"></img><p className="cardTxt">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p></div></SwiperSlide>
      <SwiperSlide><div className="card"><img src={clock} alt="картинка щита" className="smallPic"></img><p className="cardTxt">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p></div></SwiperSlide>
      <SwiperSlide><div className="card"><img src={clock} alt="картинка часов" className="smallPic"></img><p className="cardTxt">Высокая и оперативная скорость обработки заявки</p></div></SwiperSlide> 
      <SwiperSlide><div className="card"><img src={clock} alt="картинка лупы" className="smallPic"></img><p className="cardTxt">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p></div></SwiperSlide>
      <SwiperSlide><div className="card"><img src={clock} alt="картинка щита" className="smallPic"></img><p className="cardTxt">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p></div></SwiperSlide>
    </Swiper>
     </div>
     <div className="SwiperMobile None">
     <Swiper
      modules={[Navigation]}     
      spaceBetween={1}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="card"><img src={clock} alt="картинка часов" className="smallPic"></img><p className="cardTxt">Высокая и оперативная скорость обработки заявки</p></div></SwiperSlide> 
      <SwiperSlide><div className="card"><img src={clock} alt="картинка лупы" className="smallPic"></img><p className="cardTxt">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p></div></SwiperSlide>
      <SwiperSlide><div className="card"><img src={clock} alt="картинка щита" className="smallPic"></img><p className="cardTxt">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p></div></SwiperSlide>
      <SwiperSlide><div className="card"><img src={clock} alt="картинка часов" className="smallPic"></img><p className="cardTxt">Высокая и оперативная скорость обработки заявки</p></div></SwiperSlide> 
      <SwiperSlide><div className="card"><img src={clock} alt="картинка лупы" className="smallPic"></img><p className="cardTxt">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p></div></SwiperSlide>
      <SwiperSlide><div className="card"><img src={clock} alt="картинка щита" className="smallPic"></img><p className="cardTxt">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p></div></SwiperSlide>
    </Swiper>
     </div>
     <div className="forPic">
      <img src={guySvg} alt="красивая миниатюра" className="guySvg"></img>
     </div>
     <h2 className="whyUs">Наши тарифы</h2>
     <div className="prices">
      <div className="priceCard1">
        <div className="cardHeader">
          <div className="naming">
          <h3>Beginner</h3>
          <p className="lilDescription">Для небольшого исследования</p>
          </div>
          <div className="lilPic">
            <img src={bulb} className="lilImage"></img>
          </div>
        </div>
        <div className="activeTagDiv none">
        <p className="activeTag">Текущий тариф</p>
        </div>
        <div className="price">
          <p className="actualPrice">799&#8381;</p>
          <p className="pastPrice">1200&#8381;</p>
        </div>
        <p className="specifies">или 150 ₽/мес. при рассрочке на 24 мес.</p>
        <p className="beforeList">В тариф входит:</p>
        <ul className="cardList">
          <li><img src={galochka}></img>Безлимитная история запросов</li>
          <li><img src={galochka}></img>Безопасная сделка</li>
          <li><img src={galochka}></img>Поддержка 24/7</li>
        </ul>
        <button className="cardBut">Перейти в личный кабинет</button>
        </div>
        <div className="priceCard2">
        <div className="cardHeader2">
          <div className="naming">
          <h3>Pro</h3>
          <p className="lilDescription">Для HR и фрилансеров</p>
          </div>
          <div className="lilPic">
            <img src={target}></img>
          </div>
        </div>
        <div className="activeTagDiv none None">
        <p className="activeTag">Текущий тариф</p>
        </div>
        <div className="price">
          <p className="actualPrice">1299&#8381;</p>
          <p className="pastPrice">2600&#8381;</p>
        </div>
        <p className="specifies">или 279 ₽/мес. при рассрочке на 24 мес.</p>
        <p className="beforeList">В тариф входит:</p>
        <ul className="cardList">
          <li><img src={galochka}></img>Все пункты тарифа Beginner</li>
          <li><img src={galochka}></img>Экспорт истории</li>
          <li><img src={galochka}></img>Рекомендация по приоритетам</li>
        </ul>
        <button className="detailsBut2">Подробнее</button>
        </div>
        <div className="priceCard3">
        <div className="cardHeader3">
          <div className="naming3">
          <h3 className="bussines">Bussiness</h3>
          <p className="lilDescription3">Для корпоративных клиентов</p>
          </div>
          <div className="lilPic">
            <img src={mac} className="lilImage"></img>
          </div>
        </div>
        <div className="activeTagDiv none None">
        <p className="activeTag">Текущий тариф</p>
        </div>
        <div className="price">
          <p className="actualPrice">2379&#8381;</p>
          <p className="pastPrice">3700&#8381;</p>
        </div>
        <p className="specifies"></p>
        <p className="beforeList">В тариф входит:</p>
        <ul className="cardList">
          <li><img src={galochka}></img>Все пункты тарифа Pro</li>
          <li><img src={galochka}></img>Безлимитное количество запросов</li>
          <li><img src={galochka}></img>Приоритетная поддержка</li>
        </ul>
        <button className="detailsBut3">Подробнее</button>
        </div>
     </div>
     </>
    );
  }
  
  export default Main;