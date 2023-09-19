import TechGuy from "../pics/TechGuy.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import clock from "../pics/clocks.png"
import 'swiper/css/navigation';

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
     <div className="Swiper">
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
     </>
    );
  }
  
  export default Main;