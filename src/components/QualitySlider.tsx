"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Navigation } from "swiper/modules";

const serviceItems = [
  {
    title: "Carpet Cleaning",
    img: "/services/service1.jpg",
    desc: "Say Goodbye To Stains & Odors",
  },
  {
    title: "Carpet Cleaning",
    img: "/services/service2.jpg",
    desc: "Make Your Floors Shine Again",
  },
  {
    title: "Carpet Cleaning",
    img: "/services/service3.jpg",
    desc: "Make Your Floors Shine Again",
  },
  {
    title: "Carpet Cleaning",
    img: "/services/service4.jpg",
    desc: "Make Your Floors Shine Again",
  },
];

const QualitySlider = () => {
  return (
    <div className="bg-dark-100blue mt-6 py-24 px-3 md:px-7 flex gap-10 rounded-2xl">
      {/* <div className="min-w-[130px]"></div> */}
      <Swiper
        slidesPerView={1.5}
        spaceBetween={16}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        modules={[Navigation]}
        className="mySwiper lg:!pl-40 relative !pb-20 lg:!pb-0"
      >
        <div className="absolute left-0 top-0 w-40 h-full bg-dark-100blue z-[9] hidden lg:block"></div>
        {serviceItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="group">
              <div className="aspect-[3/2] rounded-lg overflow-hidden transition-all duration-500 group-hover:aspect-[3/2.5]">
                <Image
                  src={item.img}
                  width={300}
                  height={200}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-lg md:text-2xl font-bold text-light-7blue mt-3 transition-all duration-500 group-hover:scale-110 origin-left">
                {item.title}
              </h3>
              <p className="mt-2 text-sm md:text-base">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QualitySlider;
