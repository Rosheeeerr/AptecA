import './Tovar.scss'
import reit from './img_tovar/Рейтинг.png'
export default function Tovar(){
    return(
        <>
        <div className="general_container_tovar">
            <div className="container_foto_tovar">
                <div className="container_daytovar"><div className="tovar_day"><p>Товар дня</p></div></div>
            </div>
        <div className="container_nalrei"><p>Товар в наличии</p><img src={reit} alt="" /></div>
        <div className="container_name_tovar"><p>Велсон таблетки покрыт. плен. об. 3 мг, 30 шт.</p></div>
        <div className="container_opis_tovar">
            <div className="container_opis">
                 <ul>
                    <li>Бренд: <span>Lirina</span></li>
                    <li>Количество в упаковке: <span>10 шт</span></li>
                    <li>Код товара: <span>153249</span></li>
                 </ul>
            </div>


        </div>

        <div className="container_pricecart_gen">
          <div className="container_price"><p>41 108 руб.</p> <p>49 999 руб.</p></div>
            <div className="container_cart_but"><button></button></div>
          </div>


        </div>
        </>
    )
}
// бисусле бисусле ай вон ту райд май бисусле ай вонт ту райд май байк
