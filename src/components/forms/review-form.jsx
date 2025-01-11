"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
// import ReactStars from "react-rating-stars-component";
import * as Yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";
import { useAddReviewMutation } from "@/redux/features/reviewApi";
import { notifyError, notifySuccess } from "@/utils/toast";
import { Button } from "../ui/button";
import { MdStars } from "react-icons/md";


// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().label("Comment"),
});

const ReviewForm = ({ product_id }) => {
  const { user } = useSelector((state) => state.auth);
  const [rating, setRating] = useState(0);
  const [addReview, {}] = useAddReviewMutation();

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // on submit
  const onSubmit = (data) => {
    if (!user) {
      notifyError("Эхлээд нэвтэрнэ үү");
      return;
    } else {
      addReview({
        userId: user?._id,
        productId: product_id,
        rating: rating,
        comment: data.comment,
      }).then((result) => {
        if (result?.error) {
          notifyError(result?.error?.data?.message);
        } else {
          notifySuccess(result?.data?.message);
        }
      });
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex align-items-center gap-3 mb-6">
        {/* <ReactStars
          onClick={handleRating}
          count={5}
          emptyIcon={<MdStars/>}
          filledIcon={<MdStars/>}
          isHalf={false}
          size={40}
          value={rating}
        /> */}
      </div>
      <div className="tp-product-details-review-input-wrapper">
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input">
            <textarea
              {...register("comment", {
                required: `Сэтгэгдэл бичих шаардлагатай!`,
              })}
              id="comment"
              name="comment"
              placeholder="Энд сэтгэгдлээ бичээрэй..."
              className="p-3 rounded-md"
            />
          </div>
          <div className="tp-product-details-review-input-title">
            <label htmlFor="msg">Сэтгэгдэл</label>
          </div>
          <ErrorMsg msg={errors.name?.comment} />
        </div>
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input">
            <input
              {...register("name", { required: `Нэр оруулах шаардлагатай!` })}
              name="name"
              id="name"
              type="text"
              placeholder="Таны нэр"
              className="rounded-md"
            />
          </div>
          <div className="tp-product-details-review-input-title">
            <label htmlFor="name">Нэр</label>
          </div>
          <ErrorMsg msg={errors.name?.name} />
        </div>
        <div className="tp-product-details-review-input-box">
          <div className="tp-product-details-review-input">
            <input
              {...register("email", { required: `Имэйл хаяг шаардлагтай` })}
              name="email"
              id="email"
              type="email"
              placeholder="example@mail.com"
              className="rounded-md"
            />
          </div>
          <div className="tp-product-details-review-input-title">
            <label htmlFor="email">Имэйл</label>
          </div>
          <ErrorMsg msg={errors.name?.email} />
        </div>
      </div>
      <Button type="submit" className="w-full h-[50px]">
        Оруулах
      </Button>
    </form>
  );
};

export default ReviewForm;
