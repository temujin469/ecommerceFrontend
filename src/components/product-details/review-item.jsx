import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewItem = ({ review }) => {
  const { comment, createdAt, rating, userId } = review || {};

  // console.log(userId)
  return (
    <div className="border-b-2 border-dotted py-3">
      <div className="mb-3 flex items-center gap-3">
        <div className="tp-product-details-review-avater-thumb">
          {!userId?.imageURL && (
            <h5 className="bg-gray-100 w-[60px] h-[60px] rounded-full flex items-center justify-center text-gray-400 text-2xl font-medium">
              {userId?.name[0]}
            </h5>
          )}
          <a href="#">
            {userId?.imageURL && (
              <Image
                src={userId?.imageURL}
                alt="user img"
                width={60}
                height={60}
              />
            )}
            {/* <Image src="/assets/img/users/noproimage.png" alt="user img" width={60} height={60} /> */}
          </a>
        </div>
        <div className="tp-product-details-review-avater-content">
          <div>
          <ReactStars
                   count={5}
                   isHalf={true}
                   edit={false}
                   size={30}
                   value={rating}
                 />
          </div>
          {/* <div className="tp-product-details-review-avater-rating d-flex align-items-center">
          <Rating allowFraction size={16} initialValue={rating} readonly={true} />
        </div> */}
          <h3 className="tp-product-details-review-avater-title">
            {userId?.name}
          </h3>
          <span className="tp-product-details-review-avater-meta">
            {dayjs(createdAt).format("MMMM D, YYYY")}
          </span>
        </div>
      </div>
      <div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
