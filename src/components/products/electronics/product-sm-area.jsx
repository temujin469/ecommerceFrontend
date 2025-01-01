'use client';
import React from 'react';
// internal
import { ShapeLineSm } from '@/svg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ErrorMsg from '@/components/common/error-msg';
import ProductSmItem from './product-sm-item';
import HomeSmPrdLoader from '@/components/loader/home/home-sm-prd-loader';

const ProductSmArea = () => {
  const { data: products, isError, isLoading, refetch } = useGetProductTypeQuery({type:'electronics'});
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeSmPrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="Бүтээгдэхүүн олдсонгүй!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const discount_prd = products.data.filter(p => p.discount > 0).slice(0, 3);
    const featured_prd = products.data.filter(p => p.featured).slice(0, 3);
    const selling_prd = products.data.slice().sort((a, b) => b.sellCount - a.sellCount).slice(0, 3);
    content = <div className="grid gap-10 grid-cols-12 mb-10">
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <div className="tp-product-sm-list">
          <div className="tp-section-title-wrapper mb-5">
            <h3 className="tp-section-title tp-section-title-sm">Хямдралтай бүтээгдэхүүн
              <ShapeLineSm />
            </h3>
          </div>
          <div className="tp-product-sm-wrapper">
            {discount_prd.map(item => (
              <ProductSmItem key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <div className="tp-product-sm-list">
          <div className="tp-section-title-wrapper mb-5">
            <h3 className="tp-section-title tp-section-title-sm">Онцлох бүтээгдэхүүн
              <ShapeLineSm />
            </h3>
          </div>

          <div className="tp-product-sm-wrapper">
            {featured_prd.map(item => (
              <ProductSmItem key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <div className="tp-product-sm-list">
          <div className="tp-section-title-wrapper mb-5">
            <h3 className="tp-section-title tp-section-title-sm">Бусад бүтээгдэхүүн
              <ShapeLineSm />
            </h3>
          </div>

          <div className="tp-product-sm-wrapper">
            {selling_prd.map(item => (
              <ProductSmItem key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  }
  return (
    <section className="tp-product-sm-area">
      <div className="container">
        {content}
      </div>
    </section>
  );
};

export default ProductSmArea;