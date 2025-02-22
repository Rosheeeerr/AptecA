import './How.scss'
import star from './img_how/Рейтинг.png'
import chevron from './img_how/chevron.png'
import {Link} from "react-router-dom"
import { thinks } from './How'
export default function How(){
    return(
        <>
        <div className="general_container_how">
            <div className="container_how">

                <div className="container_head_how"><h1>Как мы работаем?</h1></div>
                <div className="container_stuff_how">
                    <Stu {...thinks[0]}/>
                    <Stu {...thinks[1]}/>
                    <Stu {...thinks[2]}/>
                    <Stu {...thinks[3]}/>
                </div>

                <div className="container_otziv_general">

                    <div className="container_middle_otziv">
                        <div className="container_mid_otz">
                            <div className="container_head_otz_how">
                                <div className="container_hed_how"><p>Cредняя оценка аптеки</p></div>
                                <div className="container_middle_ocenka_how">
                                    <div className="container_ocenka_how">
                                         <p>4.8</p>
                                        <img src={star} alt="" />
                                    </div>
                                   
                                </div>

                            </div>
                            <div className="container_disk_otzhow"><p>Общий рейтинг на основе 4349 отзывов наших покупателей</p></div>
                            <div className="container_bbt_how_otz"><Link to="/SevenPg"><button>ОСТАВИТЬ ОТЗЫВ</button></Link></div>
                        </div>
                    </div>


                    <div className="container_otziv_how_gen">
                        <div className="container_otziv_how">

                            <div className="container_stuff_how_otz">
                                 <div className="container_otziv_one"></div>
                            <div className="container_otziv_one"></div>
                            <div className="container_otziv_one"></div>
                            </div>
                           
                           <div className="container_link_otz"><img src={chevron} alt="" /><a href="">ВСЕ 4349 ОТЗЫВОВ</a></div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export function Stu(props){
    return(
        <>
        <div className="general_container_stu">
                <div className="container_stu">
                      <div className="container_stu_img"><img src={props.img} alt="" /></div>
                      <div className=".container_move_stu">
                            <div className="container_hednum_stu"><button>{props.num}</button><p>{props.title}</p></div>
                        <div className="container_dis_stu"><p>{props.subtitle}</p></div>
                      </div>
                </div>
          
         
        </div>
        </>
    )
}