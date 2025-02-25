import './Lk.scss'
import Home from './img_lk/home.png'
import duo from './img_lk/chevron_duo_right.png'
import Nav from '../Repet_components/Nav/Nav'
import Footer from '../Repet_components/Footer/Footer.jsx';
export default function Lk(){
    
    return(
        <>
        <div className="general_container_lk">
            <Nav/>
            <div className="container_personal">
                  <div className="container_personal_two">
                                <div className="conta_what_the_page_personal">
                                     <img src={Home}/>
                                     <p>Главная</p>
                                    <img src={duo} alt="" />
                                    <p>Личный кабинет</p>
                                </div>
                                </div>
                 <div className="conta_head_personal"><h1>Личный кабинет</h1></div>

                <div className="container_personal_stuff_general">

                <div className="personal_conta_one_part">
                    <div className="container_user_stuff_general">
                        <button>ЛИЧНЫЕ ДАННЫЕ</button>
                        <button>ВАШИ ЗАКАЗЫ</button>
                        <button>ОБРАТНАЯ СВЯЗЬ</button>
                    </div>
                </div>
                
                <div className="personal_conta_two_part">
                    <div className="container_head_personal_two_part"><p>Личный кабинет</p></div>
                    <div className="conta_general_inputs_personal">
                        <div className="conta_FIO"><input type="text" placeholder='Укажите фамилию, имя и отчество'/></div>
                        <div className="conta_data_born">
                            <div className="conta_data_born_head"><p>ДАТА РОЖДЕНИЯ</p></div>
                            <div className="conta_stuff_born">
                                <input type="text" placeholder='1' />
                                <input type="text" placeholder='Январь' />
                                <input type="text" placeholder='Год' />
                                <input type="text" placeholder='Пол' />
                            </div>
                            
                        </div>
                    <div className="container_info_lk">
                         <input type="text" placeholder='Электронная почта' />
                        <input type="text" placeholder='Телефон' />
                        <input type="text" placeholder='Новый пароль' />
                        <input type="text" placeholder='Подтверждение' />
                        <button>СОХРАНИТЬ</button>
                    </div>
                       <div className="container_your_order_lk">
                            <div className="container_hea_your_order"><p>Ваши заказы</p></div>
                            <div className="container_your_ord">
                                <div className="data_order_conta">
                                    <div className="conta_data_number_order"><p>16.12.2021</p><p>Заказ №:154544516</p></div>
                                    <div className="order_status_conta"><p>Выполнен</p></div>
                                </div>
                                
                                <div className="container_stuff_orde_lk">
                                    <YouOrd/>
                                    <YouOrd/>
                                    <YouOrd/>
                                    <YouOrd/>
                                    
                                </div>
                                <div className="conta_bbt_youord"><button>ОСТАВИТЬ ОТЗЫВ</button><button>ПОВТОРИТЬ ЗАКАЗ</button></div>
                            </div>

                       </div>

                    </div>
                    <div className="container_obrat_svaz">
                        <div className="conta_obra_name"><p>Обратная связь</p></div>
                        <div className="conta_obrat_gen">
                            <div className="conta_disc_obrat_sv"><p>Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения модели развития.</p><p>Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании систем массового участия.</p></div>
                            <div className="input_conta_obrasv">
                                <input type="text" className='in_one' placeholder='Выбрать тему обращения' />
                                <input type="text" placeholder='Фамилия, Имя и Отчество' />
                                <div className="conta_input_two_obrsv">
                                    <input type="text" placeholder='Телефон' />
                                    <input type="text" placeholder='Ваша почта' />
                                </div>
                                <input type="text" placeholder='Текст сообщения' />
                                <div className="container_write_some"><button>НАПИШИ МНЕ</button><p>Нажимая на кнопку, вы соглашаетесь на обработку <a href="">персональных данных</a></p></div>
                            </div>

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
export function YouOrd(){
    return(
        <>
        <div className="general_container_youord">
            <div className="container_foto_youord"></div>
            <div className="conta_txt_youord">
                <div className=""><p>Велсон таблетки покрыт. плен. об. 3 мг, 30 шт.</p><p>1 товар</p></div>
                <div className=""><p>41 108 руб.</p><p>49 999 руб.</p></div>
            </div>
        </div>
        </>
    )
}