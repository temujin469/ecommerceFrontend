'use client';
import React from "react";
import Link from "next/link";
// internal
import { ArrowRight } from "@/svg";
import banner_1 from "@assets/img/product/banner/product-banner-1.jpg";
import banner_2 from "@assets/img/product/banner/product-banner-2.jpg";


// banner item
function BannerItem({ sm = false, bg, title }) {
  return (
    <div
      className={`tp-banner-item ${
        sm ? "tp-banner-item-sm" : ""
      } tp-banner-height p-relative z-index-1 fix`}
    >
      <div
        className="tp-banner-thumb include-bg transition-3"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="tp-banner-content">
        {!sm && <span>15% хямдралтай</span>}
        <h3 className="tp-banner-title">
          <Link href="/shop">{title}</Link>
        </h3>
        {sm && <p>20% хямдралтай</p>}
        <div className="tp-banner-btn">
          <Link href="/shop" className="tp-link-btn">
          худалдаж авах
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

const BannerArea = () => {
  return (
    <section className="tp-banner-area pb-10">
      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <BannerItem
              bg={banner_1}
              title={
                <>
                  Smartphone <br /> BLU G91 Pro 2022
                </>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            <BannerItem
              sm={true}
              bg={banner_2}
              title={
                <>
                  HyperX Cloud II <br /> Wireless
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerArea;
