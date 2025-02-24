import './Lk.scss'
import Home from './img_lk/home.png'
import duo from './img_lk/chevron_duo_right.png'
import Nav from '../Repet_components/Nav/Nav'
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
                            
                            
                            </div>
                        </div>

                    </div>
                </div>
    

                </div>

            </div>
        </div>
        </>
    )
}