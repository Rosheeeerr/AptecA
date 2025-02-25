import './ElevenPg.scss'
import Footer from '../Repet_components/Footer/Footer.jsx';
import Home from './img_elev/home.png'
import duo from './img_elev/chevron_duo_right.png'
import Nav from '../Repet_components/Nav/Nav.jsx';
export default function ElevenPg(){
    return(
        <>
        <div className="container_general_eleven">
            <Nav/>
            <div className="container_eleven">
                  <div className="conta_what_the_page_el">
                        <img src={Home}/>
                        <p>Главная</p>
                         <img src={duo} alt="" />
                        <p>Наша лицензия</p>
                                </div>

                <div className="conta_hea_ele"><h1>Наша лицензия</h1></div>
                <div className="disc_elev"><p>Сеть социальных аптек СТОЛИЧКИ является частью аптечного холдинга Неофарм. Первая аптека в Москве была открыта в 2000 году. Наша миссия с первого дня была проста: сделать лекарства доступными по цене. Мы максимально сократили путь медикаментов от производителя к потребителю. Сотрудничая напрямую с производителями и дистрибьюторами, мы не только предоставляем лекарства по низким ценам, а также гарантируем подлинность товаров.</p></div>

                <div className="conta_bac_ele"> </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}