"use client";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import Link from "next/link";
// internal
import { AskQuestion, CompareTwo, WishlistTwo } from "@/svg";
import DetailsBottomInfo from "./details-bottom-info";
import ProductDetailsCountdown from "./product-details-countdown";
import ProductQuantity from "./product-quantity";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { add_to_compare } from "@/redux/features/compareSlice";
import { handleModalClose } from "@/redux/features/productModalSlice";

import { CiDiscount1, CiStar } from "react-icons/ci";
import { FaBoxArchive, FaPercent } from "react-icons/fa6";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DetailsTabNav from "./details-tab-nav";

const DetailsWrapper = ({
  productItem,
  handleImageActive,
  activeImg,
  detailsBottom = false,
}) => {
  const {
    sku,
    img,
    title,
    imageURLs,
    category,
    description,
    discount,
    price,
    status,
    reviews,
    tags,
    offerDate,
    additionalInformation,
  } = productItem || {};
  const [ratingVal, setRatingVal] = useState(0);
  const [textMore, setTextMore] = useState(false);
  const dispatch = useDispatch();

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

  // handle compare product
  const handleCompareProduct = (prd) => {
    dispatch(add_to_compare(prd));
  };

  return (
    <div className="rounded-t-4xl border-t sm:border-t-0 border-slate-300 mt-[-32px] md:mt-0 bg-white pt-6 md:pt-7">
      <div className="px-3">
        <div className="pb-4">
          <h5 className="text-gray">{category.name}</h5>
          <h3 className="text-3xl font-medium">{title}</h3>
        </div>

        <div className="flex flex-row gap-3">
          <div className="flex p-3 flex-1 items-center justify-center bg-gradient-to-r rounded-lg from-fuchsia-200 to-cyan-200">
            <div>
              <h5 className="line-through font-medium text-gray-400">
                {price}₮
              </h5>
              <h4 className="text-gray-700 text-3xl font-semibold pb-2">
                {discount > 0 ? (
                  <>
                    <span className="tp-product-details-price new-price">
                      {(
                        Number(price) -
                        (Number(price) * Number(discount)) / 100
                      ).toFixed(2)}
                      ₮
                    </span>
                  </>
                ) : (
                  <span className="tp-product-details-price new-price">
                    {price.toFixed(2)}₮
                  </span>
                )}
              </h4>
              <div className=" flex flex-row items-center px-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <FaPercent
                  size={18}
                  strokeWidth={1}
                  className="bg-white rounded-full p-1"
                />
                <h6 className="p-2 text-white"> {discount}% хямдал</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col w-full text-[16px] font-medium">
            <div className="bg-gray-100 rounded-lg p-3 mb-3">
              <div className="border-b border-gray-300 pb-3 flex items-center gap-2">
                <FaBoxArchive className="text-green-400" />
                <span>{status === "in-stock" ? "Бэлэн" : "Дууссан"}</span>
              </div>
              <div className="pt-3">
                <span className="text-gray-500">Хүргэлт:</span>
                <span> Үнэгүй</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg flex items-center p-3">
              <div className="flex items-center pr-3">
                <CiStar
                  className="text-yellow-400 pr-1"
                  strokeWidth={1}
                  size={30}
                />
                <span className="text-[24px]">{ratingVal}</span>
              </div>
              <div className="border-l border-gray-300 pl-3 whitespace-nowrap">
                {reviews && reviews.length > 0 ? reviews.length : 0} Үнэлгээ
              </div>
            </div>
          </div>
        </div>

        <div>
          {offerDate?.endDate && (
            <ProductDetailsCountdown offerExpiryTime={offerDate?.endDate} />
          )}
        </div>

        <div className="my-3">
          {imageURLs.some((item) => item?.color && item?.color?.name) && (
            <div className="flex items-center gap-3">
              <h4 className="text-gray-700 text-[16px] mb-2">Өнгө:</h4>
              <div className="tp-product-details-variation-list">
                {imageURLs.map((item, i) => (
                  <button
                    onClick={() => handleImageActive(item)}
                    key={i}
                    type="button"
                    className={`w-[40px] h-[40px] ${
                      item.img === activeImg ? "active" : ""
                    }`}
                  >
                    <span
                      data-bg-color={`${item.color.clrCode}`}
                      style={{ backgroundColor: `${item.color.clrCode}` }}
                    ></span>
                    {item.color && item.color.name && (
                      <span className="tp-color-variation-tootltip">
                        {item.color.name}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pb-3 border-b">
          <div className="flex gap-3">
            {/* product quantity */}
            <ProductQuantity />
            {/* product quantity */}
            <Button
              onClick={() => handleAddProduct(productItem)}
              disabled={status === "out-of-stock"}
              className="h-[50px] w-full rounded-full bg-primary"
            >
              Сагсанд хийх
            </Button>
          </div>
          <Link href="/cart" onClick={() => dispatch(handleModalClose())}>
            <Button className="rounded-full w-full h-[50px] mt-3">
              Худалдаж авах
            </Button>
          </Link>
        </div>

        <div className="py-3">
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border-b-0 bg-[#FEF2F2] rounded-lg px-3 mb-3"
            >
              <AccordionTrigger>Тайлбар</AccordionTrigger>
              <AccordionContent>
                <p>{description}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-b-0 bg-[#F0F9FF] rounded-lg px-3 mb-3"
            >
              <AccordionTrigger>Мэдээлэл</AccordionTrigger>
              <AccordionContent>{additionalInformation}</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-b-0 bg-[#F0FDF4] rounded-lg px-3"
            >
              <AccordionTrigger>Хүргэлт</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <DetailsTabNav product={productItem} />
        </div>
      </div>
    </div>
  );
};

export default DetailsWrapper;
