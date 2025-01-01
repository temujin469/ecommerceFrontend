"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
// internal
import ProductItem from "./product-item";
import { useGetOfferProductsQuery } from "@/redux/features/productApi";
import { ArrowRightLong, ShapeLine } from "@/svg";
import ErrorMsg from "@/components/common/error-msg";
import HomeOfferPrdLoader from "@/components/loader/home/home-offer-prd-loader";
import { Button } from "@/components/ui/button";

// slider setting
const sliderSetting = {
  slidesPerView: 3,
  spaceBetween: 12,
  pagination: {
    el: ".tp-deals-slider-dot",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 5,
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

const OfferProducts = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetOfferProductsQuery("electronics");
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeOfferPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="Бүтээгдэхүүн олдсонгүй!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    content = (
      <Swiper
        {...sliderSetting}
        modules={[Pagination]}
        className="tp-product-offer-slider-active swiper-container"
      >
        {product_items.map((item, i) => (
          <SwiperSlide key={i}>
            <ProductItem product={item} offer_style={true} />
          </SwiperSlide>
        ))}

        <div className="tp-deals-slider-dot tp-swiper-dot text-center mt-5"></div>
      </Swiper>
    );
  }

  return (
    <>
      <section className="tp-product-offer bg-secondary pt-5 pb-2 mb-10">
        <div className="container">
          <div className="flex justify-between items-center mb-1">
            <div className="tp-section-title-wrapper">
              <h3 className="text-2xl font-medium text-white">Урамшуулал</h3>
            </div>
            <Button className="rounded-full h-[50px] bg-primary px-5">
              <Link href="/shop" className="flex items-center gap-3">
                Бүгдийг харах <ArrowRightLong />
              </Link>
            </Button>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-product-offer-slider fix">{content}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferProducts;
