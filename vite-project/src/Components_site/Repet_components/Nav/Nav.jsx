import './Nav.scss'
import near from './Img_nav/near_me.png'
import bottarr from './Img_nav/keyboard_arrow_down.png'
import menu from './Img_nav/menu.png'
import Logo from './Img_nav/Logo.png'
import Social from './Img_nav/Socials.png'
import Mesage from './Img_nav/Message_open.png'
import Phone from './Img_nav/Phone_duotone.png'
import {Link} from "react-router-dom"
export default function Nav(){
    return(
        <>
        <div className="General_container_nav">
            <div className="Container_nav">
                    
                    {/* верхушка навки */}
                <div className="FirstPart_Nav_General">
                    <div className="FirstPart_Nav_Container">

                        <div className="container_fisrt_top">
                            <div className="container_gen_place">
                                <div className="container_logo_place"><img src={near} alt="" /></div>
                                 <div className="container_oblast">
                                    <p>Москва и область</p>
                                    <img src={bottarr} alt="" />
                                 </div>
                            
                            </div>
                            <div className="container_menu">
                                <img src={menu} alt="" />
                                <p>Служебные страницы</p>
                            </div>
                        </div>
                        
                        <div className="container_second_top">
                            <div className="container_favorite"><Link to="/favorite"><button>Избранное</button></Link></div>
                            <div className="container_lk"><Link to="/lk"><button>Личный кабинет</button></Link></div>
                        </div>

                    </div>
                </div>

                {/* серединка навки */}
               
               <div className="general_container_middle">
                    <div className="container_middle">

                        <div className="container_logoSoc">
                            <div className="container_logoSite"><Link to="/home"><img src={Logo} alt="" /></Link></div>
                            <div className="container_socials"><img src={Social} alt="" /></div>
                        </div>

                        <div className="container_info_general">

                            <div className="container_info_mail">
                                <div className="container_logo_email"><img src={Mesage} alt="" /></div>

                                    <div className="container_foConn">
                                         <div className="container_heading_email"><p>INFP@RESTOLL.RU</p></div>
                                        <div className="container_discr_email"><p>Напишите нам</p></div>
                                    </div>
                            </div>

                            <div className="container_info_mail">
                                <div className="container_logo_email"><img src={Phone} alt="" /></div>

                                    <div className="container_foConn">
                                         <div className="container_heading_email"><p>8-800-777-22-33</p></div>
                                        <div className="container_discr_email"><p>Круглосуточно</p></div>
                                    </div>
                            </div>

                            <div className="container_info_mail">
                                <div className="container_logo_email"><img src={Phone} alt="" /></div>

                                    <div className="container_foConn">
                                         <div className="container_heading_email"><p>8 (495) 223-34-03</p></div>
                                        <div className="container_discr_email"><p>Интернет-аптека</p></div>
                                    </div>
                            </div>


                        </div>


                        <div className="container_general_order">
                        <Link to="/ToPagesTwo"><button></button></Link>
                            <button>ЗАКАЗАТЬ ЗВОНОК</button>
                            <button></button>
                        </div>

                    </div>
               </div>

                {/* низ нава */}

                <div className="general_container_bottom">
                    <div className="container_bottom">

                       <Link to="/ToPagesThree"><button>ЛЕКАРСТВА</button></Link>
                        <button>ВИТАМИНЫ И БАДЫ</button>
                        <button>КРАСОТА</button>
                        <button>ГИГИЕНА</button>
                        <button>ЛИНЗЫ</button>
                        <button>МАТЬ И ДИТЯ</button>
                        <button>МЕДТОВАРЫ</button>
                        <button>ЗООТОВАРЫ</button>
                        <button>МЕДТЕХНИКА</button>

                    </div>
                </div>

                {/* не ну это саамый опущенный ахах */}

                <div className="general_container_omitted">
                    <div className="container_omitted">
                        
                        <div className="containers_but_ommited">
                        <button>Акции</button>
                        <button>Скидки</button>
                        <button>COVID-19</button>
                        <button>Аллергия</button>
                        <button>Лечебная косметика</button>
                        <button>Кишечник</button>
                        <button>Молочница</button>
                        <button>Суставы</button>
                        <button>Еще 52</button>
                        </div>


                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
// вот бы сидра с чипсами,а не сайт ваш ещё и с беком делать...