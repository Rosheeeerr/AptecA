import './benefit.scss'
import { benefits } from './benefit.js'
export default function Benefit(){
    return(
        <>
        <div className="general_container_benefit">
            <div className="container_benefit">

                <BeneStuf {...benefits[0]}/>
                <BeneStuf {...benefits[1]}/>
                <BeneStuf {...benefits[2]}/>
                <BeneStuf {...benefits[3]}/>

            </div>
        </div>
        </>
    )
}
export function BeneStuf(props){
    return(
        <>
        <div className="general_container_benestuf">
            <div className="container_img_benefits"><img src={props.img} alt="" /></div>
            <div className="container_title_benefits"><p>{props.title}</p></div>
            <div className="container_subtitle_benefits"><p>{props.subtitle}</p></div>
        </div>
        </>
    )
}