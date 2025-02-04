"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// internal
import offer_img from "@assets/img/banner/banner-slider-offer.png";
import banner_img_1 from "@assets/img/banner/banner-slider-1.png";
import banner_img_2 from "@assets/img/banner/banner-slider-2.png";
import banner_img_3 from "@assets/img/banner/banner-slider-3.png";
import { Button } from "@/components/ui/button";

// banner products
const bannerProducts = [
  {
    id: 1,
    banner_bg_txt: "компьютер",
    subtitle: "2023 оны шилдэг компьютерийн цуглуулга",
    title: "Технологийн хүч таны гарт!",
    oldPrice: 1200,
    newPrice: 999,
    img: banner_img_1,
  },
  {
    id: 2,
    banner_bg_txt: "компьютер",
    subtitle: "2023 оны шилдэг компьютерийн цуглуулга",
    title: "Ирээдүйг бүтээх хэрэгсэл!",
    oldPrice: 1500,
    newPrice: 1299,
    img: banner_img_2,
  },
  {
    id: 3,
    banner_bg_txt: "компьютер",
    subtitle: "2023 оны шилдэг компьютерийн цуглуулга",
    title: "Хурд, хүч, гайхалтай ажиллагаа!",
    oldPrice: 1700,
    newPrice: 1499,
    img: banner_img_3,
  },
];

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  pagination: {
    el: ".tp-product-banner-slider-dot",
    clickable: true,
  },
};

const ProductBanner = () => {
  return (
    <>
      <div className="tp-product-banner-area pb-10">
        <div className="container">
          <div className="tp-product-banner-slider fix">
            <Swiper
              {...slider_setting}
              modules={[Pagination, EffectFade]}
              className="tp-product-banner-slider-active swiper-container"
            >
              {bannerProducts.map((item, i) => (
                <SwiperSlide
                  key={item.id}
                  className="tp-product-banner-inner theme-bg relative z-[1] fix"
                >
                  <h4 className="tp-product-banner-bg-text">
                    {item.banner_bg_txt}
                  </h4>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6">
                      <div className="tp-product-banner-content p-relative z-index-1">
                        <h3 className="tp-product-banner-title">
                          {item.title}
                        </h3>

                        <span className="tp-product-banner-subtitle">
                          {item.subtitle}
                        </span>
                        <div className="tp-product-banner-price mb-20">
                          {/* <span className="old-price">${item.oldPrice.toFixed(2)}</span>
                          <p className="new-price">${item.newPrice.toFixed(2)}</p> */}
                        </div>
                        <Button className="h-[50px] rounded-full">
                          <Link href="/shop" className="">
                            Худалдан авалт хийх
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="tp-product-banner-thumb-wrapper p-relative">
                        <div className="tp-product-banner-thumb-shape">
                          <span className="tp-product-banner-thumb-gradient"></span>
                          <Image
                            className="tp-offer-shape"
                            src={offer_img}
                            alt="tp-offer-shape"
                          />
                        </div>

                        <div className="tp-product-banner-thumb text-end p-relative z-index-1">
                          <Image src={item.img} alt="banner-slider img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="tp-product-banner-slider-dot tp-swiper-dot"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
