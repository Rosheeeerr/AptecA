import './Th_First_section.scss'
import Nav from '../../Repet_components/Nav/Nav.jsx'
import Home from './img_first/home.png'
import duo from './img_first/chevron_duo_right.png'
import Category from '../Category/Category'
import Brand from '../BrandCatal/Brand.jsx'
import Filter from '../Filter/Filter.jsx'
import Slider3 from '../Slider3pg/Slider3.jsx'
import Hit from '../../Repet_components/Hit/Hit.jsx'
import Footer from '../../Repet_components/Footer/Footer.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Tovar from '../../Repet_components/Tovar/Tovar.jsx'
import NoNal from '../../Repet_components/NoNal/NoNal.jsx'
import Benefit from '../../Repet_components/Benefit/benefit.jsx'
export default function Th_First(){
    const swiperRef = useRef(null);
    return(
        <>
        <div className="general_container_th_first">
            <Nav/>
            <div className="container_th_first">

            <div className="container_head_threePg">
                <div className="container_subtitle_thfirst">
                    <img src={Home}/>
                    <p>Главная</p>
                    <img src={duo} alt="" />
                    <p>Поиск по алфавиту</p>
                </div>
                <div className="container_head_thfirst"><h1>Лекарственные средства</h1></div>
                </div>

                <div className="container_common_sliflt">
                    
                    <div className="container_filter_pg3">
                        <Category/>
                        <Filter/>
                        <Hit/>
                    </div>

                <div className="container_slider_pg3_one">
                    <Slider3/>
                </div>

                </div>

                <div className="container_slider_pg3_two">
                <div className="container_cart_fav">
                                
                                <div className="works_head_bbt">
                                   <div className="head_con_cart"><h1>Акция меcяца</h1></div> 
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
                                </div>
                
                            </div>

                </div>
                <div className="container_slider_pg3_two">
                <div className="container_cart_fav">
                                
                                <div className="works_head_bbt">
                                   <div className="head_con_cart"><h1>Вы смотрели</h1></div> 
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
                                </div>
                
                            </div>

                </div>
            </div>
        </div>
        </>
    )
} 
