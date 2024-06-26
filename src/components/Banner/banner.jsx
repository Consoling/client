import React, { useRef } from "react";
import './banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { bannerContent } from "../../../constants/constant";
import BannerContent from "../BannerContent";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
    
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      <>
        {bannerContent.map((banner) => {
          return (
            <div key={banner.id} >
              <SwiperSlide key={banner.id} className="py-3 px-2 rounded-lg">
               
                <BannerContent content={banner} />
              </SwiperSlide>
            </div>
          );
        })}
      </>
    </Swiper>
  );
};

export default Banner;
