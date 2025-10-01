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
        <div className="bg-[#f6f6f6] h-[35rem] md:h-[18rem] lg:h-[40rem] relative">
          {/* <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            className="h-full w-full "
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
                  className="h-full w-full md:object-cover"
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
                  className="h-full w-full object-center md:object-cover"
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
                  className="h-full w-full object-center md:object-cover"
                />
              </picture>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};
export default Banner;
