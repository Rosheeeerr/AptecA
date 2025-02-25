import './Slider3.scss'
import Tovar from '../../Repet_components/Tovar/Tovar';
import React, { useState } from 'react';
import Price from './Group43.png'
import PlusApt from '../../Repet_components/PlusApt/PlusApt.jsx';
export default function Slider3(){
    const [content, setContent] = useState(<TovaSlid/>); 
    const changeContent = (newContent) => {
      setContent(newContent);
    };
  
    return (
        <div className="general_container_slider3">
             <div className="simple-toggle-container">
             <div className="buttons-container_general">
                    <div className="container_other_stuff_slid3">
                        <p>СОРТИРОВАТЬ:</p>
                        <img src={Price} alt="" />
                        <p>По популярности</p>
                    </div>
                  <div className="buttons-container">
          <button onClick={() => changeContent(<TovaSlid/>)}>1</button>
          <button onClick={() => changeContent('Контент 2')}>2</button>
          <button onClick={() => changeContent('Контент 3')}>3</button>
          <button onClick={() => changeContent('Контент 4')}>4</button>
          <button onClick={() => changeContent('Контент 5')}></button>
          <button onClick={() => changeContent('Контент 6')}>32</button>
        </div>
             </div>
      
         <div className="content-container">{content}</div>
  
      </div>
        </div>
    );
  };
  export function TovaSlid(){
    return(
        <>
        <div className="general_container_tovaslid">
            <div className="container_tovaslide_one">
                <Tovar/>
                <Tovar/>
                <Tovar/>
            </div>
            <div className="container_tovaslide_one">
                <Tovar/>
                <Tovar/>
                <Tovar/>
            </div>
            <PlusApt/>
            <div className="general_container_tovaslid">
            <div className="container_tovaslide_one">
                <Tovar/>
                <Tovar/>
                <Tovar/>
            </div>
            <div className="container_tovaslide_one">
                <Tovar/>
                <Tovar/>
                <Tovar/>
            </div>
            <div className="container_tovaslide_one">
                <Tovar/>
                <Tovar/>
                <Tovar/>
            </div>
            <div className="container_tovaslide_one">
                <Tovar/>
                <Tovar/>
                <Tovar/>
            </div>  

            <div className="conta_bottom_bbt_slid3">
                <div className="conta_bbt_slid3">

                    <div className="buttons-container">
                    <button onClick={() => changeContent(<TovaSlid/>)}>1</button>
          <button onClick={() => changeContent('Контент 2')}>2</button>
          <button onClick={() => changeContent('Контент 3')}>3</button>
          <button onClick={() => changeContent('Контент 4')}>4</button>
          <button onClick={() => changeContent('Контент 5')}></button>
          <button onClick={() => changeContent('Контент 6')}>32</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </>
    )
  }
