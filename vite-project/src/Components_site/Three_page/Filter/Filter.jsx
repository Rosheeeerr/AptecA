import './Filter.scss'
import down from './img_filter/caret_down.png'
import reg from './img_filter/Регулятор.png'
export default function Filter(){
    
    return(
        <>
        <div className="general_container_filter">
            <div className="container_filter">
                <div className="conta_filter_head"><p>ФИЛЬТР</p></div>

                <div className="conta_filter_scroll">
                    <div className="price_filter"><p>Цена</p><img src={down} alt="" /></div>
                    <div className="container_input_filter_one"><input type="text" placeholder='от 2365'/><input type="text" placeholder='до 865878'/></div>
                    <div className="container_grad_scroll"><img src={reg} alt="" /></div>
                </div>

                <div className="container_contry_filter_gen">
                     <div className="price_filter"><p>Страна</p><img src={down} alt="" /></div>
                    <div className="your_contry_filter">
                       <div><input type="checkbox" name="" id="" /> <p>Беларусь</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Германия</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Греция</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Ирландия</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Испания</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Италия</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Китай</p></div>
                    </div>
                </div>

                <div className="conta_vozdei_filter_gen">
                    <div className="price_filter"><p>Воздействие</p><img src={down} alt="" /></div>
                    <div className="conta_inp_filter"><input type="text" placeholder='Поиск...' /></div>
                    <div className="your_tocka_filter">
                       <div><input type="checkbox" name="" id="" /> <p>Для бронхов</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Для волос</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Для глаз</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Для горла</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Для губ</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Для дыхательных путей</p></div>
                       <div><input type="checkbox" name="" id="" /> <p>Для желудка</p></div>
                    </div>
                </div>

                <div className="container_in_stock_gen">
                    <div className="price_filter"><p>Наличие</p><img src={down} alt="" /></div>
                    <div className="conta_ord_stocc">
                        <div className=""><input type="radio" name="" id="" /><p>В наличии</p></div>
                        <div className=""><input type="radio" name="" id="" /><p>Под заказ</p></div>
                    </div>
                    <div className="cont_bbt_filt_stoc"><button>Показать</button><button>Сбросить</button></div>
                </div>


            </div>
        </div>
        </>
    )
}