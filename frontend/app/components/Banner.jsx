"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <section>
      <div className="pt-[5rem] lg:pt-[6rem] space-y-6 lg:space-y-6">
        <div className="hidden w-[95%] lg:w-[85%] mx-auto sm:flex flex-col gap-1 md:gap-2 lg:flex-row justify-between lg:items-end">
          <h1 className="w-full text-[1.4rem] lg:text-[3rem] font-semibold leading-[2rem] lg:leading-[3rem]">
            <span className="color--fade lg:block">We Are The</span>
            <span className="lg:block ml-[.5rem] lg:ml-0">Sealing Experts</span>
          </h1>
          <div className="text-[.8rem] lg:text-[1.4rem] color--fade lg:font-medium max-w-[35rem] leading-[1.1rem] lg:leading-[1.6rem] lg:text-end">
            Experts in sealing solutions for{" "}
            <span className="text-white">Oil & Gas</span> field equipments
          </div>
        </div>
        <div className="bg-[#fafcfb] h-[35rem] md:h-[18rem] lg:h-[22rem] relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            className="h-full"
          >
            <SwiperSlide>
              <picture>
                <source
                  media="(max-width:640px)"
                  srcSet="/images/banner/banner11.jpg"
                />
                <img
                  src="/images/banner/banner4.jpg"
                  alt="packer banner"
                  className="h-full w-full md:object-contain"
                />
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source
                  media="(max-width:640px)"
                  srcSet="/images/banner/banner22.jpg"
                />
                <img
                  src="/images/banner/banner2.jpg"
                  alt="o ring banner"
                  className="h-full w-full object-center md:object-contain"
                />
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source
                  media="(max-width:640px)"
                  srcSet="/images/banner/banner33.jpg"
                />
                <img
                  src="/images/banner/banner3.jpg"
                  alt="ball plug valve banner"
                  className="h-full w-full object-center md:object-contain"
                />
              </picture>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Banner;
