import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import styles from '../styles/components/parceiros-swiper.module.scss';

const swiperModules = [Navigation, Autoplay];

export default function ParceirosSwiper() {
  return (
    <div className={styles.swiperParceiros}>
      <Swiper
        modules={swiperModules}
        spaceBetween={50}
        slidesPerView={4}
        autoplay
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        className={styles.parceirosSlider}
      >
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/ceratizit.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/osg.png" alt="" /></div></SwiperSlide>
        {/* <SwiperSlide><div className={styles.parceirosHolder}><img src="/hgt.png" alt="" /></div></SwiperSlide> */}
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/startool.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/hev.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/spinwiser.png" alt="" /></div></SwiperSlide>
        {/* <SwiperSlide><div className={styles.parceirosHolder}><img src="/american.png" alt="" /></div></SwiperSlide> */}
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/bt-fixo.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/hepyc.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className={styles.parceirosHolder}><img src="/amec.png" alt="" /></div></SwiperSlide>
      </Swiper>
    </div>
  );
}

