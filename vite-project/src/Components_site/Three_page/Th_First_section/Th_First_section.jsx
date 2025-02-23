import './Th_First_section.scss'
import Nav from '../../Repet_components/Nav/Nav.jsx'
import Home from './img_first/home.png'
import duo from './img_first/chevron_duo_right.png'
import Category from '../Category/Category'
import Brand from '../BrandCatal/Brand.jsx'
import Filter from '../Filter/Filter.jsx'
import Slider3 from '../Slider3pg/Slider3.jsx'
export default function Th_First(){
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

                <div className="general_container_firstpart_threepg">
                    <div className="conta_category_threepg">
                        <Category/>
                         <div className="containa_catal_two_general"><Filter/></div>
                    </div>
                   
                    <div className="general_container_secondpart_threepg">
                        <Brand/>
                        <div className="container_slider_threepg">
                            <Slider3/>
                        </div>

                    </div>
                </div>
                
                


            </div>
        </div>
        </>
    )
}