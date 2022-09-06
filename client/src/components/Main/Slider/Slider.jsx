import MySwiper from "./swiper/MySwiper"
import s from './Slider.module.scss'
import Content from "./content/Content";
import { useState } from 'react';

const Slider = () => {
  const [swiperRef, setSwiperRef] = useState();

  return (
    <div className={s.slider}>
      <MySwiper setSwiperRef={setSwiperRef} />
      <Content />
      <div className={s.toggles}>
        <div className={s.btnPrev} onClick={() => swiperRef.slidePrev()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="M20 42.2 1.8 24 20 5.8l1.5 1.5L4.75 24 21.5 40.7Z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className={s.btnNext} onClick={() => swiperRef.slideNext()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="m15.75 42.15-1.5-1.45L31 23.95 14.25 7.25l1.5-1.5 18.2 18.2Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Slider;