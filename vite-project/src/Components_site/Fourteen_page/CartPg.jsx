import './CartPg.scss'
import Home from './img_yourcart/home.png'
import duo from './img_yourcart/chevron_duo_right.png'
import Nav from '../Repet_components/Nav/Nav'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef,useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Tovar from '../Repet_components/Tovar/Tovar'
import NoNal from '../Repet_components/NoNal/NoNal'
import Benefit from '../Repet_components/Benefit/benefit.jsx'
import Footer from '../Repet_components/Footer/Footer.jsx';
import star from './img_yourcart/Рейтинг.png'
export default function YourCart(){
      const swiperRef = useRef(null);
    return(
        <>
        <div className="general_container_yourcart">
            <Nav/>
            <div className="container_yourcart">
                  <div className="container_yourcart_two">
                         <div className="conta_what_the_page_yourcart">
                             <img src={Home}/>
                             <p>Главная</p>
                             <img src={duo} alt="" />
                            <p>Корзина</p>
                            </div>
                        </div>

                <div className="general_conta_order">

                    <div className="container_yourOrder">
                        <div className="conta_head_yourorder">
                            <div className="conta_head_order"><h1>Корзина</h1></div>
                            <div className="conta_delete_order"><button>ОЧИСТИТЬ КОРЗИНУ</button></div>
                        </div>

                        <div className="container_close_carttovar"></div>
                        <div className="container_stuff_tovcart">
                        <CartTovar/>
                        <CartTovar/>
                        <CartTovar/>
                        <CartTovar/>
                        </div>

                    </div>

                    <div className="conta_gen_cheque">
                    
                        <div className="conta_cheque">
                            <div className="container_order_name"><div className=""><p>Ваш заказ</p></div></div>
                            <div className="container_general_discount"><div className=""><p>Скидка</p> <p>-32 руб</p></div></div>
                            <div className="container_arrange_order_gen">
                                <div className=""><p>Итого без доставки</p> <p>548 руб</p></div>
                                <div className=""><button>ОФОРМИТЬ ЗАКАЗ</button></div>
                            </div>
                            <div className="conta_promo_gen">
                                <div className=""><p>Промокод</p></div>
                                <div className=""><input type="text" placeholder='Введите промо-код' /></div>
                            </div>
                        
                        </div>

                    </div>

                </div>


                 <div className="container_yorcart_fav">
                                                
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
export function CartTovar(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount((prev) => prev + 1); 
    };
  
    const handleDecrement = () => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0)); 
    };
    return(
        <>
            <div className="general_container_carttovar">
                <div className="container_img_carttovar"></div>
             
                <div className="move_conta_carttovar">
                <div className="conta_reit_carttovar"><p>Есть в наличии</p><img src={star} alt="" /></div>
                    <div className="gen_conta_name_count">
                        <div className="container_info_tovarcart">
                            <div className="name_tovar_carttovar"><p>Велсон таблетки покрыт. плен. об. 3 мг, 30 шт.</p></div>
                            <div className="container_characters_carttovar">
                            <div className="container_opis">
                         <ul>
                        <li>Бренд: <span>Lirina</span></li>
                        <li>Количество в упаковке: <span>10 шт</span></li>
                        <li>Код товара: <span>153249</span></li>
                       </ul>
            </div>
                          </div>
                        </div>

                        <div className="conta_price_count">
                            <div className="conta_price_tovarcart">
                                <div className="container_price_tovarcart"><p>41 108 руб.</p> <p>49 999 руб.</p></div>
                            </div>
                            <div className="conta_count_tovarcart">
                            <div className="counter">
                 <button  onClick={handleDecrement}>-</button>
                 <div className="counter-value">{count}</div>
                 <button onClick={handleIncrement}>+</button>
    </div>
                            </div>
                        </div>
                    </div>

                </div>
             
            </div>
        </>
    )
}