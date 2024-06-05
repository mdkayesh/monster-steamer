"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

const serviceItems = [
  {
    img: "/beforeandafter.png",
  },
  {
    img: "/beforeandafter2.png",
  },
  {
    img: "/beforeandafter.png",
  },
  {
    img: "/beforeandafter2.png",
  },
];

const BeforeAndAfterSlider = () => {
  return (
    <div className="mt-10">
      {/* <div className="min-w-[130px]"></div> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="feedback beforeAndAfter !pb-20"
      >
        {serviceItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full">
              <Image
                src={item.img}
                width={500}
                height={300}
                alt="image"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BeforeAndAfterSlider;
