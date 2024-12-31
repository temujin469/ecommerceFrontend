"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// internal
import { Minus, Plus } from "@/svg";
import { decrement, increment } from "@/redux/features/cartSlice";

const ProductQuantity = () => {
  const { orderQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // handleIncrease
  const handleIncrease = () => {
    dispatch(increment());
  };
  // handleDecrease
  const handleDecrease = () => {
    dispatch(decrement());
  };
  return (
    <div className="h-[50px] bg-slate-200 rounded-full flex justify-between items-center flex-row px-[15px]">
      <span
        className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
        onClick={handleDecrease}
      >
        <Minus />
      </span>
      <p className="px-[15px]">{orderQuantity}</p>
      <span
        className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
        onClick={handleIncrease}
      >
        <Plus />
      </span>
    </div>
  );
};

export default ProductQuantity;
