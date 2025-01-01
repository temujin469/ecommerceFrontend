"use client";
// external
import React, { useState } from "react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
// internal
import slider_img_1 from "@assets/img/slider/slider-img-1.png";
import slider_img_2 from "@assets/img/slider/slider-img-2.png";
import slider_img_3 from "@assets/img/slider/slider-img-3.png";
import shape_1 from "@assets/img/slider/shape/slider-shape-1.png";
import shape_2 from "@assets/img/slider/shape/slider-shape-2.png";
import shape_3 from "@assets/img/slider/shape/slider-shape-3.png";
import shape_4 from "@assets/img/slider/shape/slider-shape-4.png";
import { ArrowRightLong, SliderNextBtn, SliderPrevBtn, TextShape } from "@/svg";
import { Button } from "../ui/button";

// slider data
const sliderData = [
  {
    id: 1,
    pre_title: { text: "Эхлэх үнэ", price: 274 },
    title: "2023 оны шилдэг таблет цуглуулга",
    subtitle: {
      text_1: "Зөвхөн энэ долоо хоногт ",
      percent: 35,
      text_2: "хямдралтай",
    },
    img: slider_img_1,
    green_bg: true,
  },
  {
    id: 2,
    pre_title: { text: "Эхлэх үнэ", price: 999 },
    title: "2023 оны шилдэг дэвтэр цуглуулга",
    subtitle: {
      text_1: "Зөвхөн энэ долоо хоногт ",
      percent: 10,
      text_2: "хямдралтай",
    },
    img: slider_img_2,
    green_bg: true,
  },
  {
    id: 3,
    pre_title: { text: "Эхлэх үнэ", price: 999 },
    title: "2023 оны шилдэг дэвтэр цуглуулга",
    subtitle: {
      text_1: "Зөвхөн энэ долоо хоногт ",
      percent: 10,
      text_2: "хямдралтай",
    },
    img: slider_img_3,
    is_light: true,
  },
];

function Shape({ img, num }) {
  return (
    <Image
      className={`tp-slider-shape-${num}`}
      src={img}
      alt="slider-shape"
      priority
    />
  );
}

const HomeHeroSlider = () => {
  const [active, setActive] = useState(false);

  // handleActiveIndex
  const handleActiveIndex = (index) => {
    if (index === 2) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <>
      <section className="tp-slider-area relative z-[1]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          effect="fade"
          navigation={{
            nextEl: ".tp-slider-button-next",
            prevEl: ".tp-slider-button-prev",
          }}
          onSlideChange={(swiper) => handleActiveIndex(swiper.activeIndex)}
          pagination={{ el: ".tp-slider-dot", clickable: true }}
          modules={[Navigation, Pagination, EffectFade]}
          className={`tp-slider-active tp-slider-variation swiper-container ${
            active ? "is-light" : ""
          }`}
        >
          {sliderData.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`tp-slider-item tp-slider-height flex items-center ${
                item?.green_bg
                  ? "bg-[#000]"
                  : item?.is_light
                  ? "is-light"
                  : ""
              }`}
              style={{ backgroundColor: item.is_light && "#E3EDF6" }}
            >
              <div className="tp-slider-shape">
                <Shape img={shape_1} num="1" />
                <Shape img={shape_2} num="2" />
                <Shape img={shape_3} num="3" />
                <Shape img={shape_4} num="4" />
              </div>
              <div className="container h-full">
                <div className="grid grid-cols-12 h-full">
                  <div className="col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-6">
                    <div className="tp-slider-content p-relative z-index-1">
                      {/* <span>
                        {item.pre_title.text} <b>{item.pre_title.text}₮</b>
                      </span> */}
                      <h3 className="tp-slider-title">{item.title}</h3>
                      <p>
                        {item.subtitle.text_1}
                        <span className="text-primary">
                          -{item.subtitle.percent}%
                          <TextShape />
                        </span>{" "}
                        {item.subtitle.text_2}
                      </p>

                      <Button className="h-[50px] rounded-full px-6">
                        <Link href="/shop">
                          Худалдан авалт хийх
                        </Link>
                        <ArrowRightLong />
                      </Button>
                    </div>
                  </div>
                  <div className="col-span-12 xl:col-span-7 lg:col-span-6 md:col-span-6">
                    <div className="tp-slider-thumb text-end">
                      <Image src={item.img} alt="slider-img" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-slider-arrow tp-swiper-arrow hidden sm:flex">
            <button type="button" className="tp-slider-button-prev flex justify-center items-center bg-white text-gray-700">
              <SliderPrevBtn />
            </button>
            <button type="button" className="tp-slider-button-next flex justify-center items-center bg-white text-gray-700">
              <SliderNextBtn />
            </button>
          </div>
          <div className="tp-slider-dot tp-swiper-dot pb-8"></div>
        </Swiper>
      </section>
    </>
  );
};

export default HomeHeroSlider;
