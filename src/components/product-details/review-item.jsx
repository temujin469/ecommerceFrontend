import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
// import ReactStars from "react-rating-stars-component";

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
          {/* <div>
            <ReactStars
              count={5}
              isHalf={true}
              edit={false}
              size={30}
              value={rating}
            />
          </div> */}

          <div class="flex items-center gap-2">
            <svg
              class="w-6 h-6 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p class=" text-lg font-bold text-gray-900 dark:text-white">
              {rating}
            </p>
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
