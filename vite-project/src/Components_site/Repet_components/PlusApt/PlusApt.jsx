import './PlusApt.scss'
import { pl } from './PlusApt.js'
export default function PlusApt(){
    return(
        <>
        <div className="general_container_plusapt">
            <div className="container_plusapt">

            <Pl {...pl[0]}/>
            <Pl {...pl[1]}/>
            <Pl {...pl[2]}/>
            <Pl {...pl[3]}/>               

            </div>
        </div>
        </>
    )
}
export function Pl(props){
    return(
        <>
        <div className="container_pll_gen">
            <div className="conta_img_plapt"><img src={props.img} alt="" /></div>
            <div className="conta_txt_pllsw">
                <div className="conta_title_plsl"><p>{props.title}</p></div>
                <div className="conta_subtitle_plsl"><p>{props.subtitle}</p></div>
            </div>

         </div>
        </>
    )
}