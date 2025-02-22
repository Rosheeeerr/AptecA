import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Tovar from '../../Repet_components/Tovar/Tovar';
import NoNal from '../../Repet_components/NoNal/NoNal';
import './Stock.scss';

export default function Stock() {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="general_container_stock">
        <div className="container_stock">
          <div className="general_container_header_swiperbbt">
            <div className="container_header_swiperbbt">
              <div className="container_head_storck"><h1>Акция месяца</h1></div>
              <div className="container_swiper_b">
                <button onClick={() => swiperRef.current.swiper.slidePrev()}></button>
                <button onClick={() => swiperRef.current.swiper.slideNext()}></button>
              </div>
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            className="mySwiper"
          >
                <SwiperSlide>
                    <div className="container_tov_stock">
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                         <NoNal/>
                    </div>
                    <div className="container_tov_stock">
                         <NoNal/>
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                    </div>
                </SwiperSlide>
            <SwiperSlide>
            <div className="container_tov_stock">
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                         <NoNal/>
                    </div>
                    <div className="container_tov_stock">
                         <NoNal/>
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                         <Tovar/>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="container_tov_stock">
                         <Tovar/>
                         <Tovar/>
                         <NoNal/>
                         <Tovar/>
                         <NoNal/>
                    </div>
                    <div className="container_tov_stock">
                         <NoNal/>
                         <NoNal/>
                         <Tovar/>
                         <NoNal/>
                         <Tovar/>
                    </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}