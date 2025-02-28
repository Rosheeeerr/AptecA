import './Search.scss'
import pills from './img_search/pill.png'
import vitami from './img_search/vitamin.png'
import boy from './img_search/baby-bo.png'
import { searchstff } from './StuffSearch'
export default function Search(){
    return(
        <>
           <div className="general_container_search">
                <div className="container_search">

                    <div className="container_head_search"><h1>Поиск по алфавиту</h1><p>Выбор товара по заболеванию</p></div>

                    <div className="container_letter">

                    <div className="container_rus_letter">
                        <button>А</button>
                        <button>Б</button>
                        <button>В</button>
                        <button>Г</button>
                        <button>Д</button>
                        <button>Е</button>
                        <button>Ё</button>
                        <button>Ж</button>
                        <button>З</button>
                        <button>И</button>
                        <button>Й</button>
                        <button>К</button>
                        <button>Л</button>
                        <button>М</button>
                        <button>Н</button>
                        <button>О</button>
                        <button>П</button>
                        <button>Р</button>
                        <button>С</button>
                        <button>Т</button>
                        <button>У</button>
                        <button>Ф</button>
                        <button>Х</button>
                        <button>Ц</button>
                        <button>Ч</button>
                        <button>Ш</button>
                        <button>Щ</button>
                        <button>Ъ</button>
                        <button>Ы</button>
                        <button>Ь</button>
                        <button>Э</button>
                        <button>Ю</button>
                        <button>Я</button>
                    </div>
                    <div className="container_eng_letter">
                       <button>A</button>
                       <button>B</button>
                       <button>C</button>
                       <button>D</button>
                       <button>E</button>
                       <button>F</button>
                       <button>G</button>
                       <button>H</button>
                       <button>I</button>
                       <button>J</button>
                       <button>K</button>
                       <button>L</button>
                       <button>M</button>
                       <button>N</button>
                       <button>O</button>
                       <button>P</button>
                       <button>Q</button>
                       <button>R</button>
                       <button>S</button>
                       <button>T</button>
                       <button>U</button>
                       <button>V</button>
                       <button>W</button>
                       <button>X</button>
                       <button>Y</button>
                       <button>Z</button>
                    </div>

                    <div className="container_num_search">
                        <button>0</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>

                    </div>

                    <div className="container_catser_spisok">

                        <div className="conta_catser_uno_spi">

                            <div className="conta_catser_part_uno">
                                <div>
                                    <div><img src={pills} alt="" /><p>Лекарства</p></div>
                                    <div>
                                        <ul>
                                            <li>Акушерство, гинекология</li>
                                            <li>Аллергия</li>
                                            <li>Анестезия,реанимация</li>
                                            <li>Антибиотики</li>
                                            <li>Болезни крови</li>
                                            <li>Боль,температура</li>
                                            <li>Геморрой</li>
                                            <li>Глаза</li>
                                            <li>Глисты,вши,чесотка</li>
                                            <li>Гомеопатия</li>
                                            <li>Диабет</li>
                                            <li>Диагностические средства</li>
                                            <li>Дыхательная система</li>
                                            <li>Желудок,кишечник,печень</li>
                                            <li>Зубы и рот</li>
                                            <li>иммуная система</li>
                                            <li>Кожа</li>
                                            <li>Мочеполовая система</li>
                                            <li>Нарушения обмена веществ</li>
                                            <li>Неврология,психиатрия</li>
                                            <li>Обеззараживающие средства</li>
                                            <li>Онкология</li>
                                            <li>Отравления</li>
                                            <li>Питательные смеси</li>
                                            <li>Противовирусные средства</li>
                                            <li>Противогрибковые средства</li>
                                            <li>Разное</li>
                                        </ul>
                                    </div>

                                    <div><button>Все категории</button></div>
                                
                                </div>
                            </div>

                            <div className="conta_catser_part_due">
                                <div>
                                    <div className=""><img src={vitami} alt="" /><p>Витамины и БАД</p></div>
                                    <div className="">
                                        <ul>
                                            <li>Аминокислоты</li>
                                            <li>L-карнитин</li>
                                            <li>Антиоксиданты</li>
                                            <li>БАД для зрения</li>
                                            <li>Поливитамины</li>
                                            <li>БАД вредные привычки</li>
                                            <li>БАД для коррекции веса</li>
                                            <li>БАД при диабете</li>
                                            <li>БАД при климаксе</li>
                                            <li>БАД при простуде</li>
                                            <li>БАД седативные</li>
                                            <li>Витамины и минералы</li>
                                            <li>Витамины для беременных и кормящих</li>
                                            <li>БАД при диабете</li>
                                            <li>БАД при климаксе</li>
                                            <li>БАД при простуде</li>
                                        </ul>
                                    </div>
                                    <div><button>Все категории</button></div>
                                </div>
                                
                                <div>
                                    <div className=""><img src={boy} alt="" /><p>Красота</p></div>
                                    <div className="">
                                        <ul>
                                            <li>Стеклянные перегородки для дома</li>
                                            <li>Стеклянные перегородки для офиса</li>
                                            <li>Стеклянные перегородки</li>
                                            <li>Декоративные перегородки</li>
                                            <li>Противопожарные перегородки</li>
                                        </ul>
                                    </div>
                                    <div><button>Все категории</button></div>
                                </div>

                             </div>  
                            </div>


                        <div className="conta_catser_due_spi">
                    
                             <div className="conta_catser_part_tre">
                                <CatSer {...searchstff[0]}/>
                                <CatSer {...searchstff[1]}/>
                                <CatSer {...searchstff[2]}/>
                             </div>
                             <div className="conta_catser_part_tre">
                                <CatSer {...searchstff[3]}/>
                                <CatSer {...searchstff[4]}/>
                                <CatSer {...searchstff[5]}/>
                             </div>

                            </div>   

                    </div>


                </div>
            </div> 
        </>
    )
}
export function CatSer(props){
    return(
        <>
        <div className="container_catser_general">
        <div>
<div className=""><img src={props.img} alt="" /><p>{props.title}</p></div>
    <div className="">
        <ul>
            <li>Стеклянные перегородки для дома</li>
            <li>Стеклянные перегородки для офиса</li>
            <li>Стеклянные перегородки</li>
            <li>Декоративные перегородки</li>
            <li>Противопожарные перегородки</li>
        </ul>
    </div>
    <div><button>Все категории</button></div>

</div>
        </div>
        </>
    )
}