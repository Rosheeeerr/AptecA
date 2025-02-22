import './Header.scss'
import Nav from '../../Repet_components/Nav/Nav'
import Hit from '../../Repet_components/Hit/Hit'
import { pluss } from './Plus'
export default function Header(){
    return(
        <>
        <div className="General_container_header">
            <Nav/>
            <div className="Container_header">

              <div className="general_container_brush">
                <div className="container_txt_brush">
                    <div className="container_head_brush"><p><span>Oral-b vitality</span> электрическая зубная щетка</p></div>
                    <div className="container_disr_brush"><p>Клинически доказано, что электрическая зубная щетка более эффективно очищает полость рта по сравнению с обычной мануальной зубной щеткой.</p></div>
                    <div className="container_but_brush"><button>ПЕРЕЙТИ В КАТАЛОГ</button></div>
                </div>

                <div className="container_brush_back"></div>
              </div>

                <div className="general_container_nivea">
                  <div className="container_gen_pink">
                    <div className="container_pink">
                        
                    </div>
                  </div>


                      <div className="cont_hi">
                        <Hit/>
                      </div>
                    
                </div>
                

            </div>

            <div className="General_container_plus">
                <div className="container_plus">
                    <Plu {...pluss[0]}/>
                    <Plu {...pluss[1]}/>
                    <Plu {...pluss[2]}/>
                    <Plu {...pluss[3]}/>
                    <Plu {...pluss[4]}/>
                </div>
            </div>

        </div>
        </>
    )
}
export function Plu(props){
    return(
        <>
        <div className="general_container_pl">
            <div className="container_img_pl"><img src={props.img} alt=""/></div>
            <div className="plus_dop">
                 <div className="container_plus_head"><p>{props.title}</p></div>
                <div className="container_plus_desk"><p>{props.discr}</p></div>
            </div>
           
        </div>
        </>
    )
}