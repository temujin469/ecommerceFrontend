'use client';
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import WishlistItem from './wishlist-item';
import MobileNav from '../common/mobile-navbar';

const WishlistArea = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  return (
    <>
      <section className="tp-cart-area pb-120">
        <div className="container">
          {wishlist.length === 0 &&
            <div className='text-center pt-50'>
              <h3>Одоогоор бүтээгдэхүүн алга</h3>
              <Link href="/shop" className="tp-cart-checkout-btn mt-20">Дэлгүүр буцах</Link>
            </div>
          }
          {wishlist.length > 0 &&
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-cart-list mb-45 mr-30">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2" className="tp-cart-header-product">Бүтээгдэхүүн</th>
                        <th className="tp-cart-header-price">Үнэ</th>
                        <th className="tp-cart-header-quantity">Ширхэг</th>
                        <th>Үйлдэл</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.map((item, i) => (
                        <WishlistItem key={i} product={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="tp-cart-bottom">
                  <div className="row align-items-end">
                    <div className="col-xl-6 col-md-4">
                      <div className="tp-cart-update">
                        <Link href="/cart" className="tp-cart-update-btn">Таны сагс</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
      <MobileNav/>
    </>
  );
};

export default WishlistArea;