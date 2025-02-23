import './Favorite.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Nav from '../Repet_components/Nav/Nav'
import Home from './img_favorite/home.png'
import duo from './img_favorite/chevron_duo_right.png'
import Tovar from '../Repet_components/Tovar/Tovar'
import NoNal from '../Repet_components/NoNal/NoNal'
import Benefit from '../Repet_components/Benefit/benefit.jsx'
import Footer from '../Repet_components/Footer/Footer.jsx';
export default function Favorite(){
    const swiperRef = useRef(null);
    return(
        <>
        <div className="general_container_favorite">
            <Nav/>
            <div className="container_favorite_two">
                <div className="conta_what_the_page">
                     <img src={Home}/>
                     <p>Главная</p>
                    <img src={duo} alt="" />
                    <p>Избранное</p>
                </div>
                <div className="conta_gen_head_favorite">

                    <div className="conta_head_favorite"><h1>Избранное</h1></div>
                    <div className="conta_other_stuff_favorite">
                        <button>ОЧИСТИТЬ ВСЁ</button>
                        <button>ДОБАВИТЬ ВСЁ В КОРЗИНУ</button>
                    </div>

                </div>

                <div className="container_tovari_cart">
                    <div className="conta_cart_one">
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                        <NoNal></NoNal>
                    </div>
                    <div className="conta_cart_one">
                        <NoNal></NoNal>
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                    </div>
                </div>

                     <div className="container_cart_fav">
                                
                                <div className="works_head_bbt">
                                   <div className="head_con_cart"><h1>Всегда пригодится</h1></div> 
                                   <div className="container_bbt_works">
                                   <button onClick={() => swiperRef.current.swiper.slidePrev()}></button>
                                   <button onClick={() => swiperRef.current.swiper.slideNext()}></button>
                                   </div>
                
                                </div>
                
                                <div className="container_swiper_works">
                                <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            className="myFavorite">
                
                            <SwiperSlide>
                                <div className="cart_stuff_slider">
                                <NoNal></NoNal>
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="cart_stuff_slider">
                                <NoNal></NoNal>
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                        <Tovar></Tovar>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>ВО ВСЕ ВИНОВАТЫ УЗБЕКИ И ДОСАЕВ</p>
                                <p>ДАНЯ САМАЯ ГЛАВНАЯ ЧУРКА ИЗ ВСЕХ ЧУРОШНЫХ ЧУРОК</p>
                                <p>ГДЕ МОЙ ТОРТИК?А?!</p>
                            </SwiperSlide>
                
                          </Swiper>
                          <div className="conta_benefits_favorite">
                            <Benefit/>
                            </div>
                                </div>
                
                            </div>


            </div>
        </div>
        <Footer/>
        </>
    )
}