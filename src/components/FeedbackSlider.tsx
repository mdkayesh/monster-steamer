"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Navigation } from "swiper/modules";
import StarRating from "./StarRating";

const serviceItems = [
  {
    name: "Jared B.",
    img: "/yelplogo.svg",
    desc: "I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.",
    star: 5,
  },
  {
    name: "Lesly Q.",
    img: "/googlelogo.svg",
    desc: "David was an amazing tech when I moved into my new place! Can't wait to schedule my next appointment.",
    star: 5,
  },
  {
    name: "Tom K.",
    img: "/googlelogo.svg",
    desc: "The carpet is not only clean, but the stains are gone. They did a wonderful job. I recommend them to everyone.",
    star: 5,
  },
  {
    name: "Tom K.",
    img: "/googlelogo.svg",
    desc: "The carpet is not only clean, but the stains are gone. They did a wonderful job. I recommend them to everyone.",
    star: 5,
  },
  {
    name: "Tom K.",
    img: "/googlelogo.svg",
    desc: "The carpet is not only clean, but the stains are gone. They did a wonderful job. I recommend them to everyone.",
    star: 5,
  },
];

const FeedbackSlider = () => {
  return (
    <div className="mt-10">
      {/* <div className="min-w-[130px]"></div> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        breakpoints={{
          400: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        modules={[Navigation]}
        className="feedback !pb-20"
      >
        {serviceItems.map((item, i) => (
          <SwiperSlide key={i} className="bg-dark-100blue rounded-lg p-8 grow">
            <p className="text-light-11blue line-clamp-4">{item.desc}</p>
            <div className="flex items-center justify-between mt-10">
              <h3>{item.name}</h3>
              <div className="flex gap-2 items-center">
                <Image src={item.img} alt={item.name} width={24} height={24} />
                <StarRating num={item.star} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
