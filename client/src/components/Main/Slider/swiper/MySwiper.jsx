import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './MySwiper.module.scss'
import s1 from '../../../../assets/images/slider/1.jpg'
import s2 from '../../../../assets/images/slider/2.jpg'
import s3 from '../../../../assets/images/slider/3.jpg'
import s4 from '../../../../assets/images/slider/4.jpg'
import s5 from '../../../../assets/images/slider/5.jpg'
import { Autoplay } from "swiper";

const MySwiper = ({setSwiperRef}) => {
  const slides = [s1, s2, s3, s4, s5]

  return (
    <Swiper
    onSwiper={setSwiperRef}
      spaceBetween={0}
      slidesPerView={1}
      speed={1000}
      loop={true}
      touchRatio={1.5}
      navigation={true}
      effect={"flip"}
      pagination={{ clickable: true }}
      className={s.mySwiper}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {slides.map((i) => (
        <SwiperSlide key={i}>
          <div
            className={s.slide}
            style={{
              background: `url(${i}) no-repeat center / cover`,
            }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper