import './Footer.scss'
import {Link} from "react-router-dom"
import Logo from './img_footer/footer_logo.png'
import phone from './img_footer/Phone_duotone.png'
import mesage from './img_footer/Message_open.png'
export default function Footer(){
    return(
        <>
        <div className="general_container_footer">
            <div className="container_vopros_gen">
                <div className="head_vopros_general">
                    <div className="head_vopros"><p>Остались вопросы?</p></div>
                    <div className="container_input_vopros">
                        <input type="text" placeholder='Иванов Иван Иванович' />
                        <input type="text" placeholder='+7 (___) ___-__-__' />
                        <p>Нажимая на кнопку, вы соглашаетесь на обработку <a href="">персональных данных</a></p>
                        <button>ЗАДАТЬ ВОПРОС</button>
                    </div>

                </div>
            </div>


            <div className="container_footer_gen">
                <div className="container_footer">

                    <div className="container_footer_logo">
                        <img src={Logo} alt="" />
                        <p>Все права защищены и охраняются законом</p>
                    </div>

                    <div className="container_spicok_one">
                        <ul>
                            <li>О компании</li>
                            <Link to='/Eight'><li>Доставка</li></Link>
                            <li>Самовывоз из аптеки </li>
                            <li>Оплата</li>
                            <li>Юридическим лица</li>
                            <Link to='/Elev'><li>Лицензия</li></Link>
                        </ul>
                    </div>
                    <div className="container_spicok_one">
                        <ul>
                            <li>Обратная связь</li>
                            <li>Реклама на сайте</li>
                            <Link to='/FivePg'><li>Франшиза</li></Link>
                            <li>Вакансии</li>
                            <li>Политика конфиденциальности</li>
                            <li>Пользовательское соглашение</li>
                        </ul>
                    </div>

                    <div className="container_info_footer">
                        <div className="container_mail_footer">
                            <div className="conta_logo_foo"><img src={mesage} alt="" /></div>
                            <div className="gena_conta_inf">
                                <div className="conta_mail_info"><p>INFO@RESTOLL.RU</p></div>
                                <div className="conta_dis_foo"><p>Напишите нам</p></div>
                            </div>
                          

                        </div>

                        <div className="container_phone_footer">
                            <div className="conta_logo_foo"><img src={phone} alt="" /></div>
                            <div className="gena_conta_inf">
                                <div className="conta_mail_info"><p>8-800-777-22-33</p></div>
                                <div className="conta_dis_foo"><p>Круглосуточно</p></div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="conta_some_txt">
                        <p>Общество с ограниченной ответственностью «еАптека»; Адрес: Москва, Фрунзенская набережная, дом 42, цокольный этаж, помещение I, комната 2; Лицензия: ЛО-50-02-007632 от 27 ноября 2020 г.; ЛО-77-02-011346 от 22 декабря 2020 г.; ОГРН: 1147746631988, ИНН 7704865540</p>
                    </div>

                </div>
            </div>


        </div>
        </>
    )
}