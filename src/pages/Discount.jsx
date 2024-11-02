import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const discountImages = [
  { id: 1, src: "cv.svg", alt: "Discount 1" },
  { id: 2, src: "Untitled-2.png", alt: "Discount 2" },
  { id: 3, src: "cv.svg", alt: "Discount 3" },
];

const Discount = () => {
  return (
    <div className="flex justify-center items-center   bg-red-500">
      <div className="w-full max-w-4xl mx-auto  ">
      
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
          className=""
        >
          {discountImages.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Discount;
