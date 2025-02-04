'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// internal
import useCartInfo from '@/hooks/use-cart-info';
import RenderCartProgress from './render-cart-progress';
import empty_cart_img from '@assets/img/product/cartmini/empty-cart.png';
import { closeCartMini, remove_product } from '@/redux/features/cartSlice';
import { Button } from '../ui/button';

const CartMiniSidebar = () => {
  const { cart_products, cartMiniOpen } = useSelector((state) => state.cart);
  const { total } = useCartInfo();
  const dispatch = useDispatch();

  // handle remove product
  const handleRemovePrd = (prd) => {
    dispatch(remove_product(prd))
  }

// handle close cart mini 
const handleCloseCartMini = () => {
  dispatch(closeCartMini())
}
  return (
    <>
      <div className={`cartmini__area tp-all-font-roboto ${cartMiniOpen ? 'cartmini-opened' : ''}`}>
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper">
            <div className="cartmini__top relative ">
              <div className="cartmini__top-title">
                <h4 className='text-gray-600'>Таны сагс</h4>
              </div>
              <div className="cartmini__close">
                <button onClick={() => dispatch(closeCartMini())} type="button" className="cartmini__close-btn cartmini-close-btn bg-gray-100 rounded-full h-[30px] w-[30px]">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            <div className="cartmini__shipping">
              <RenderCartProgress/>
            </div>
            {cart_products.length > 0 && <div className="cartmini__widget">
              {cart_products.map((item,i) => (
                <div key={i} className="cartmini__widget-item">
                  <div className="cartmini__thumb rounded-lg">
                    <Link href={`/product-details/${item._id}`}>
                      <Image src={item.img} width={70} height={60} alt="product img" />
                    </Link>
                  </div>
                  <div className="cartmini__content">
                    <h5 className="cartmini__title">
                      <Link href={`/product-details/${item._id}`}>{item.title}</Link>
                    </h5>
                    <div className="cartmini__price-wrapper">
                      {item.discount > 0 ? <span className="cartmini__price">{(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100).toFixed(2)}₮</span> : <span className="cartmini__price">${item.price.toFixed(2)}</span>}
                      <span className="cartmini__quantity">{" "}x{item.orderQuantity}</span>
                    </div>
                  </div>
                  <a onClick={() => handleRemovePrd({ title: item.title, id: item._id })} className="cartmini__del cursor-pointer"><i className="fa-regular fa-xmark"></i></a>
                </div>
              ))}
            </div>}
            {/* if no item in cart */}
            {cart_products.length === 0 && <div className="cartmini__empty text-center mt-0 pt-10">
              <Image src={empty_cart_img} alt="empty-cart-img" />
              <p>Таны сагс хоосон байна</p>
              {/* <Link href="/shop" className="tp-btn">Буцах</Link> */}
            </div>}
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4 className='text-xl'>Нийт:</h4>
              <span className='text-xl'>{total.toFixed(2)}₮</span>
            </div>
            <div className="cartmini__checkout-btn">
              <Button className="rounded-full h-[50px] bg-primary w-full mb-3">
               <Link href="/cart" onClick={handleCloseCartMini}>Дэлгэрэнгүй харах</Link>

              </Button>
              <Button className="rounded-full h-[50px] w-full">
              <Link href="/checkout" onClick={handleCloseCartMini} >Тооцоо хийх</Link>

              </Button>

            </div>
          </div>
        </div>
      </div>
      {/* overlay start */}
      <div onClick={handleCloseCartMini} className={`body-overlay ${cartMiniOpen ? 'opened' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default CartMiniSidebar;