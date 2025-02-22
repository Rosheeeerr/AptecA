import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Works.scss'
//да,это импорт картинок
import uno from './img_works/uno.png'
import due from './img_works/due.png'
import tre from './img_works/tre.png'
import quattro from './img_works/quattro.png'
import cinque from './img_works/cinque.png'
import sei from './img_works/sei.png'
import sette from './img_works/sette.png'
import otto from './img_works/otto.png'
import nove from './img_works/nove.png'
import dieci from './img_works/dieci.png'
import undici from './img_works/undici.png'
import dodici from './img_works/dodici.png'
//Слайдер партнеры
export default function Works(){
    const swiperRef = useRef(null);
    return(
        <>
        <div className="general_container_works">
            <div className="container_works">
                
                <div className="works_head_bbt">
                   <div className="head_con_works"><h1>Наши партнеры</h1></div> 
                   <div className="container_bbt_works">
                   <button onClick={() => swiperRef.current.swiper.slidePrev()}></button>
                   <button onClick={() => swiperRef.current.swiper.slideNext()}></button>
                   </div>

                </div>

                <div className="container_swiper_works">
                <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            className="myWorks">

            <SwiperSlide>
                <div className="partners_works">
                    <div className="container_partners">
                        <img src={uno} alt="" />
                        <img src={due} alt="" />
                        <img src={tre} alt="" />
                        <img src={quattro} alt="" />
                        <img src={cinque} alt="" />
                        <img src={sei} alt="" />
                    </div>
                    <div className="container_partners">
                        <img src={sette} alt="" />
                        <img src={otto} alt="" />
                        <img src={nove} alt="" />
                        <img src={dieci} alt="" />
                        <img src={undici} alt="" />
                        <img src={dodici} alt="" />
                    </div>
                </div>
                </SwiperSlide>

            <SwiperSlide>
            <div className="partners_works">
                    <div className="container_partners">
                        <img src={uno} alt="" />
                        <img src={due} alt="" />
                        <img src={tre} alt="" />
                        <img src={quattro} alt="" />
                        <img src={cinque} alt="" />
                        <img src={sei} alt="" />
                    </div>
                    <div className="container_partners">
                        <img src={sette} alt="" />
                        <img src={otto} alt="" />
                        <img src={nove} alt="" />
                        <img src={dieci} alt="" />
                        <img src={undici} alt="" />
                        <img src={dodici} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <p>Встречаются два грузина. Один с удочкой, с рыбалки идёт, другой - Гоги, с книгой, идёт в сторону города.
— Эй, Гоги, что за книга?
— "Логика", Вано! Несу в библиотеку сдавать, прочитал.
— И о чём?
— А вот я тебе расскажу. Вот смотри. Вот у тебя, Вано, есть удочка.
— Да, есть, вот она.
— Значит, ты любишь ходить на рыбалку. А раз любишь ходить на рыбалку, значит любишь природу?
— Конечно, Гоги, у нас такой природа красивый, как такой не любить!
— Вот! Значит, и красивый ты любишь. А значит любишь красивый женщина.
— О, Гоги, я так люблю красивый женщина! Больше чем рыбалка!
— Вот! Раз ты любишь красивый женщина, значит ты не Пидарас.
Довольный, Вано пошёл с удочкой к речке, тут встретил Рудо, купавшегося. Тот возвращался с реки, и видел их, да и спрашивает:
— Вано, о чём это Гоги так долго с тобой говорил, да?
— О логике.
— А это как, Вано, логика?
— Я тебе сейчас объясню, Рудо. Вот у тебя есть удочка?
— Нет, Вано, нету...
— Значит, ты Пидарас.</p>
            </SwiperSlide>

          </Swiper>
                </div>

            </div>
        </div>
        </>
    )
}