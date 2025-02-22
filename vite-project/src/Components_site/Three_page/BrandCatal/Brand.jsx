import './Brand.scss'
import ScrollableBox from '../Scroll/Scroll'
import { Bran } from './Brand'
export default function Brand(){
    return(
        <>
        <div className="general_container_brand">
            <div className="container_brand">

                <div className="container_firstpart_brand">

                <div className="container_head_one_brand"><p>КАТАЛОГ</p></div>
                <div className="containa_card_one">
                     <CardBr {...Bran[0]}/>
                    <CardBr {...Bran[1]}/>
                    <CardBr {...Bran[2]}/>
                    <CardBr {...Bran[0]}/>
                </div>
                <div className="containa_card_one">
                <CardBr {...Bran[2]}/>
                <CardBr {...Bran[0]}/>
                <CardBr {...Bran[0]}/>
                <CardBr {...Bran[1]}/>
                </div>

                </div>

                <div className="container_secondpart_brand">
                    <div className="containa_title_scroll"><p>ПОПУЛЯРНЫЕ БРЕНДЫ</p></div>
                    <div className="containa_scroll"><ScrollableBox/></div>
                    </div>

            </div>
        </div>
        </>
    )
}
export function CardBr(props){
    return(
        <>
        <div className="container_cardbr">
            <div className="container_cardbr_img"><img src={props.img} alt="" /></div>
            <div className="container_cardbr_txt"><p>{props.title}</p></div>
        </div>
        </>
    )
}
//А перестройка все идет и идет по плану
//И вся грязь преваратилась в голый лед
//И все идет по плану.Я люблю сметану