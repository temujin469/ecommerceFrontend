import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
// internal
import { Cart, QuickView, Wishlist } from "@/svg";
import Timer from "@/components/common/timer";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";

const ProductItem = ({ product, offer_style = false }) => {
  const {
    _id,
    img,
    category,
    title,
    reviews,
    price,
    discount,
    status,
    offerDate,
  } = product || {};
  console.log(status);
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();
  const [ratingVal, setRatingVal] = useState(0);
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const rating =
        reviews.reduce((acc, review) => acc + review.rating, 0) /
        reviews.length;
      setRatingVal(rating);
    } else {
      setRatingVal(0);
    }
  }, [reviews]);

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };
  // handle wishlist product
  const handleWishlistProduct = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  return (
    <>
      <div
        className={`group ${
          offer_style ? "tp-product-offer-item" : ""
        } tp-product-item transition-3`}
      >
        <div className="tp-product-thumb relative bg-gray-100">
          <div className="bg-primary group-hover:blur-md transition-transform animate-in duration-300 w-[70%] aspect-square z-[1] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full"></div>
          {discount > 0 ? (
            <span className="text-sm z-[2] min-w-[33px] text-center bg-secondary px-1 rounded-full text-white absolute top-3 left-3">
              {discount}%
            </span>
          ) : null}
          <Link href={`/product-details/${_id}`}>
            <Image
              src={img}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="aspect-square object-cover z-[1] relative"
              alt="product-electronic"
            />

            <div className="tp-product-badge">
              {status === "out-of-stock" && (
                <span className="product-hot">Дууссан</span>
              )}
            </div>
          </Link>

          {/*  product action */}
          <div className="tp-product-action">
            <div className="tp-product-action-item d-flex flex-column">
              {isAddedToCart ? (
                <Link
                  href="/cart"
                  className={`tp-product-action-btn ${
                    isAddedToCart ? "active" : ""
                  } tp-product-add-cart-btn`}
                >
                  <Cart />{" "}
                  <span className="tp-product-tooltip">Сагсанд харах</span>
                </Link>
              ) : (
                <button
                  onClick={() => handleAddProduct(product)}
                  type="button"
                  className={`tp-product-action-btn flex items-center justify-center ${
                    isAddedToCart ? "active" : ""
                  } tp-product-add-cart-btn`}
                  disabled={status === "out-of-stock"}
                >
                  <Cart />

                  <span className="tp-product-tooltip">Сагслах</span>
                </button>
              )}
              <button
                onClick={() => dispatch(handleProductModal(product))}
                type="button"
                className="tp-product-action-btn tp-product-quick-view-btn flex items-center justify-center"
              >
                <QuickView />

                <span className="tp-product-tooltip">Харах</span>
              </button>
              <button
                type="button"
                className={`tp-product-action-btn flex items-center justify-center ${
                  isAddedToWishlist ? "active" : ""
                } tp-product-add-to-wishlist-btn`}
                onClick={() => handleWishlistProduct(product)}
                disabled={status === "out-of-stock"}
              >
                <Wishlist />
                <span className="tp-product-tooltip">Дуртай</span>
              </button>
            </div>
          </div>
        </div>
        {/*  product content */}
        <div className="p-3">
          <div className="text-[10px] uppercase">
            <a href="#">{category?.name}</a>
          </div>
          <h3 className="mb-1 text-[14px] font-medium text-nowrap text-ellipsis overflow-hidden">
            <Link href={`/product-details/${_id}`}>{title}</Link>
          </h3>
          {/* <div className="tp-product-rating d-flex align-items-center">
            <div className="tp-product-rating-icon">
              <Rating
                allowFraction
                size={18}
                initialValue={ratingVal}
                readonly={true}
              />
            </div>
            <div className="tp-product-rating-text">
              <span>
                ({reviews && reviews.length > 0 ? reviews.length : 0} Review)
              </span>
            </div>
          </div> */}
          <div className="tp-product-price-wrapper">
            {discount > 0 ? (
              <>
                <span className="old-price font-medium text-[12px] text-gray-500 line-through">
                  {price}₮
                </span>
                <span className="font-medium text-primary">
                  {" "}
                  {(
                    Number(price) -
                    (Number(price) * Number(discount)) / 100
                  ).toFixed(2)}
                  ₮
                </span>
              </>
            ) : (
              <span className="font-medium text-primary">
                {parseFloat(price).toFixed(2)}₮
              </span>
            )}
          </div>
          {offer_style && (
            <div className="">
              {dayjs().isAfter(offerDate?.endDate) ? (
                 <ul className="w-full flex justify-between gap-1 text-white">
                 <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
                   <span className="text-[13px] sm:text-2xl leading-[13px]">{0}</span> Өдөр
                 </li>
                 <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
                   <span className="text-[13px] sm:text-2xl leading-[13px]">{0}</span> Цаг
                 </li>
                 <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
                   <span className="text-[13px] sm:text-2xl leading-[13px]">{0}</span> Мин
                 </li>
                 <li className="w-full aspect-square text-center flex flex-col items-center justify-center text-[7px] sm:text-sm bg-primary rounded-lg">
                   <span className="text-[13px] sm:text-2xl leading-[13px]">{0}</span> Сэк
                 </li>
               </ul>
              ) : (
                <Timer expiryTimestamp={new Date(offerDate?.endDate)} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
