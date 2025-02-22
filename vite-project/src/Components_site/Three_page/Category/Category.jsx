import './Category.scss'
import che from './chevron_duo_right.png'
export default function Category(){
    return(
        <>
        <div className="general_container_category">
            <div className="container_category">

                <div className=""><p>КАТЕГОРИИ</p></div>
                <div className=""><p>Акушерство, гинекология</p></div>
                <div className=""><p>Аллергия</p></div>
                <div className=""><p>Анестезия, реанимация</p></div>
                <div className=""><p>Антибиотики</p></div>
                <div className=""><p>Болезни крови</p></div>
                <div className=""><p>Боль,температура</p></div>
                <div className=""><p>Геморрой</p></div>
                <div className=""><p>Глаза</p></div>
                <div className=""><p>Глисты,вши,чесотка</p></div>
                <div className=""><p>Гомеопатия</p></div>
                <div className=""><p>Диабет</p></div>
                <div className=""><p>Диагностические средства</p></div>
                <div className=""><p>Дыхательная система</p></div>
                <div className=""><p>Желудок, кишечник, печень</p></div>
            </div>
            <div className="show_category">
                <div className=""><img src={che} alt="" /><p>ПОКАЗАТЬ ВСЕ КАТЕГОРИИ</p></div>
                </div>
        </div>
        </>
    )
}
//Солнце светит негры пашут вот такая доля наша 