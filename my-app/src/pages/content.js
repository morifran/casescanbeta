import React, { useEffect } from 'react';
import search from "../pics/Search.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import pic from "../pics/postPic.png"
import Zel from "../pics/ЗелЁнский.png"

const Content = () => {
  useEffect(() => {
    document.querySelector(".regMenu").classList.add("None");
    document.querySelector(".userInfo").classList.remove("None");
    document.querySelector(".companiesInfo").classList.remove("None");
    document.querySelector(".companiesInfo").classList.remove("none");
  }, []);

  return (
    <div className='content'>
        <div className='Description'>
            <div className='waitPls'>
                <h2>Ищем. Скоро будут результаты</h2>
                <p className='commonText'>Поиск может занять некоторое время, просим сохранять терпение.</p>
            </div>
            <div className='forSearchImg'>
                <img src={search}></img>
            </div>  
        </div>
        <div className='result'>
            <h2>Общая сводка</h2>
            <p>Найдено {} вариантов </p>
            <div className='none'>
                <Swiper
                  spaceBetween={-100}
                  slidesPerView={9}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide><div className='fstSlideDiv'><p>Период</p><p>Всего</p><p>Риски</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                  <SwiperSlide><div className='slideDiv'><p className='dateInf'>10.09.2021</p><p className='atAll'>5</p><p className='danger'>0</p></div></SwiperSlide>
                </Swiper>
            </div>
            <div className='None'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            </div>
            
        </div>
        <h2 className='listDocuments'>Список документов</h2>
        <div className='forPosts'>
            <div className='postCard'>
                <div className='forDayAndAuthor'>
                    <p className='day'>13.09.2021</p>
                    <a className='forAuthor' href=''>Комсомольская правда KP.RU</a>
                </div>
                <p className='postCardHeader'>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</p  >
                <div className='typeOfPost'><p>Технические новости</p></div>
                <img className='cardPic' src={pic}></img>
                <p className='postText'>SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.</p>
                <div className='cardFooter'>
                    <button className='read'>Читать в источнике</button>    
                    <p>2 543 слова</p>
                </div>           
            </div>


            <div className='postCard'>
                <div className='forDayAndAuthor'>
                    <p className='day'>15.10.2021</p>
                    <a className='forAuthor' href=''>VC.RU</a>
                </div>
                <p className='postCardHeader'>Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций</p  >
                <div className='typeOfPost'><p>Технические новости</p></div>
                <img className='cardPic' src={Zel}></img>
                <p className='postText'>Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один. В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.</p>
                <div className='cardFooter'>
                    <button className='read'>Читать в источнике</button>    
                    <p>3 233 слова</p>
                </div>           
            </div>
        </div>
    </div>
  );
}

export default Content;
