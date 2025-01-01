'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import Link from 'next/link';
// internal
import { ArrowRight } from '@/svg';
import ProductItem from './product-item';
import PrdCategoryList from './prd-category-list';
import ErrorMsg from '@/components/common/error-msg';
import b_bg_1 from '@assets/img/product/gadget/gadget-banner-1.jpg';
import b_bg_2 from '@assets/img/product/gadget/gadget-banner-2.jpg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import gadget_girl from '@assets/img/product/gadget/gadget-girl.png';
import HomeGadgetPrdLoader from '@/components/loader/home/home-gadget-prd-loader';

const ProductGadgetArea = () => {
  const { data: products, isError, isLoading } = useGetProductTypeQuery({type:'electronics'});

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeGadgetPrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 6);
    content = product_items.map((prd, i) => (
      <div key={i} className="col-span-1">
        <ProductItem product={prd} />
      </div>
    ))
  }

  // gadget banner 
  function GadgetBanner() {

    const settings = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".tp-product-gadget-banner-slider-dot",
        clickable: true,
      },
    }

    const banner_data = [
      { bg: b_bg_1, title: <>Шинээр ирсэн <br/> бүтээгдэхүүн</>, price: 99 },
      { bg: b_bg_2, title: <>Өндөл үнэлгээтэй<br /> бүтээгдэхүүн</>, price: 55 },
    ]
    return (
      <Swiper {...settings} effect='fade' modules={[Pagination, EffectFade]} className="tp-product-gadget-banner-slider-active swiper-container">
        {banner_data.map((b, i) => (
          <SwiperSlide key={i} className="tp-product-gadget-banner-item include-bg" 
          style={{ backgroundImage: `url(${b.bg.src})`}}>
            <div className="tp-product-gadget-banner-content">
              <span className="tp-product-gadget-banner-price">Хямдралтай</span>
              <h3 className="tp-product-gadget-banner-title">
                <Link href="/shop">{b.title}</Link>
              </h3>
            </div>
          </SwiperSlide>
        ))}
        <div className="tp-product-gadget-banner-slider-dot tp-swiper-dot"></div>
      </Swiper>
    )
  }
  return (
    <>
      <section className="tp-product-gadget-area pb-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-4">
              <div className="tp-product-gadget-sidebar">
                <div className="tp-product-gadget-categories p-relative fix mb-3">
                  <div className="tp-product-gadget-thumb">
                    <Image src={gadget_girl} alt="gadget_girl img" priority />
                  </div>
                  <h3 className="tp-product-gadget-categories-title">Бүтээгдэхүүн</h3>

                  <div className="tp-product-gadget-categories-list">
                    <PrdCategoryList />
                  </div>

                  <div className="tp-product-gadget-btn">
                    <Link href="/shop" className="tp-link-btn">Цааш үзэх
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="tp-product-gadget-banner">
                  <GadgetBanner />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-8">
              <div className="tp-product-gadget-wrapper">
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGadgetArea;