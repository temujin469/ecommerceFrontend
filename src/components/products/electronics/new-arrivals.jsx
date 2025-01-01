"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// internal
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { NextArr, PrevArr, ShapeLine } from "@/svg";
import ErrorMsg from "@/components/common/error-msg";
import ProductItem from "./product-item";
import HomeNewArrivalPrdLoader from "@/components/loader/home/home-newArrival-prd-loader";

// slider setting
const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 12,
  pagination: {
    el: ".tp-arrival-slider-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-arrival-slider-button-next",
    prevEl: ".tp-arrival-slider-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 2,
    },
  },
};

const NewArrivals = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({ type: "electronics", query: "new=true" });
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeNewArrivalPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    content = (
      <Swiper
        {...slider_setting}
        modules={[Navigation, Pagination]}
        className="tp-product-arrival-active swiper-container"
      >
        {product_items.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <>
      <section className="tp-product-arrival-area pb-10">
        <div className="container">
          <div className="flex justify-between items-center gap-3 mb-3">
            <div className="">
              <h3 className="text-3xl text-gray-600 font-medium">Шинэ бараа</h3>
            </div>
            <div className="tp-product-arrival-more-wrapper">
              <div className="flex gap-3">
                <button
                  type="button"
                  className="tp-arrival-slider-button-prev rounded-full h-[50px] w-[50px] text-white bg-primary hover:bg-secondary flex justify-center items-center"
                >
                  <PrevArr />
                </button>{" "}
                <button
                  type="button"
                  className="tp-arrival-slider-button-next rounded-full h-[50px] w-[50px] text-white bg-primary hover:bg-secondary flex justify-center items-center"
                >
                  <NextArr />
                </button>
              </div>
            </div>
          </div>
          <div>{content}</div>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
