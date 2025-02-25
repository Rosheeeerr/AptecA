import './blog.scss'
import home from './img_blog/home.png'
import duo from './img_blog/chevron_duo_right.png'
import Nav from '../Repet_components/Nav/Nav'
import Uno from './img_blog/Uno_img.png'
import Due from './img_blog/Due_img.png'
import Tre from './img_blog/Tre_img.png'
import Quattro from './img_blog/Quattro_img.png'
import Cinque from './img_blog/Cinque_img.png'
import Sei from './img_blog/Sei_img.png'
import Sette from './img_blog/Sette_img.png'
import Otto from './img_blog/Otto_img.png'
import Nove from './img_blog/Nove_img.png'
import Footer from '../Repet_components/Footer/Footer.jsx';
import { blogg } from './blog'
export default function Blog(){
    return(
        <>
        <div className="container_blog_general">
            <Nav/>
            <div className="container_blog">
                <div className="container_wtp_blog">
                    <img src={home} alt="" />
                    <p>Главная</p>
                    <img src={duo} alt="" />
                    <p>Лекарственные средства</p>
                    <img src={duo} alt="" />
                    <p>Ферментосодержащие препараты</p>
                    <img src={duo} alt="" />
                    <p>Раздраженный кишечник</p>
                </div>

                <div className="conta_head_blog"><h1>Блог о здоровье</h1></div>
                <div className="container_stuff_bolezni">
                    <div><img src={Uno} alt="" /><p>COVID-19</p><p>14</p></div>
                    <div><img src={Due} alt="" /><p>Аллергия</p><p>24</p></div>
                    <div><img src={Tre} alt="" /><p>Лечебная косметика</p><p>124</p></div>
                    <div><img src={Quattro} alt="" /><p>Кишечник</p><p>2</p></div>
                    <div><img src={Cinque} alt="" /><p>Молочница</p><p>14</p></div>
                    <div><img src={Sei} alt="" /><p>Избыточный вес</p><p>51</p></div>
                    <div><img src={Sette} alt="" /><p>Суставы</p><p>123</p></div>
                    <div><img src={Otto} alt="" /><p>Зрение</p><p>11</p></div>
                    <div><img src={Nove} alt="" /><p>Подагра</p><p>19</p></div>
                </div>

                <div className="container_search_blog_gen">
                    <input type="text" placeholder='Начинайте писать или введите название товара...' />
                </div>

                <div className="conta_tegs_blog">
                    <div className=""><p>ТЕГИ</p></div>
                    <div className="">
                        <button>Производитель</button>
                        <button>Кратко о товаре</button>
                        <button>Показания</button>
                        <button>Как принимать, курс приема и дозировка</button>
                        <button>Описание</button>
                        <button>Функциональные преимущества</button>
                        <button>Условия хранения</button>
                        <button>Срок годности </button>
                        <button>Действующее вещество</button>
                        <button>Лекарственная форма</button>
                    </div>
                </div>

                <div className="general_container_blg_end">
                    <div className="conta_blg_end_one">

                        <div className="big_blg_end_one">
                            <div className=""></div>
                            <div className="">
                                <p>Активная жизнь без "приливов" - все в ваших руках</p>
                                <p>С другой стороны рамки и место обучения кадров позволяет оценить значение форм развития. Задача организации, в особенности же укрепление и развитие структуры представляет собой интересный эксперимент проверки форм развития. </p>
                                <p>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение существенных финансовых и административных условий. Повседневная практика показывает.</p>
                            </div>

                        </div>

                        <div className="cont_wi_tab_move_one">
                            
                            <div className="ta_one">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>
                            <div className="ta_one">
                            <Tab {...blogg[1]}/>
                            <Tab {...blogg[3]}/>
                            </div>
                            <div className="ta_one">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>
                            <div className="ta_one">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>
                        </div>
                       

                    </div>




                    <div className="conta_blg_end_two">
                      <div className="cont_wi_tab_move_two">
                         <div className="ta_two">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>
                            <div className="ta_two">
                            <Tab {...blogg[1]}/>
                            <Tab {...blogg[3]}/>
                            </div>
                            <div className="ta_two">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>
                            <div className="ta_two">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>
                            <div className="ta_two">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>
                            <div className="ta_two">
                            <Tab {...blogg[3]}/>
                            <Tab {...blogg[0]}/>
                            </div>  
                    </div>
                      </div>
                    
                </div>


            </div>
        </div>
        <Footer/>
        </>
    )
}

export function Tab(props){
    return(
        <>
        <div className="general_conta_tab">
            <div className="conta_tab_img"><img src={props.img} alt="" /></div>
            <div className="conta_txt_tab"><p>{props.title}</p><p>{props.subtitle}</p></div>
        </div>
        </>
    )
}
