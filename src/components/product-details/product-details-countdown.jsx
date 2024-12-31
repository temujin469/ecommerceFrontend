"use client";
import React from "react";
import Timer from "../common/timer";
import dayjs from "dayjs";
import { FaFire } from "react-icons/fa";

const ProductDetailsCountdown = ({ offerExpiryTime }) => {
  return (
    <div className="h-[60px] px-3 flex justify-center items-center my-3 rounded-lg bg-gradient-to-r from-violet-200 to-pink-200">
      <h4 className="hidden pr-3 sm:flex items-center text-red-300 justify-center gap-1 text-[16px] flex-1">
        <FaFire /> <span className="">Хямдал </span>
      </h4>
      <div className="w-full">
        {dayjs().isAfter(offerExpiryTime) ? (
          <ul className="flex flex-row justify-between w-full gap-3 text-center">
            <li className="bg-white rounded-lg p-2 text-red-400 flex-1">
              <span>{0}</span> Өдөр
            </li>
            <li className="bg-white rounded-lg p-2 text-red-400 flex-1">
              <span>{0}</span> Цаг
            </li>
            <li className="bg-white rounded-lg p-2 text-red-400 flex-1">
              <span>{0}</span> Мин
            </li>
            <li className="bg-white rounded-lg p-2 text-red-400 flex-1">
              <span>{0}</span> Сек
            </li>
          </ul>
        ) : (
          <Timer expiryTimestamp={new Date(offerExpiryTime)} />
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCountdown;
