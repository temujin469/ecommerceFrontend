"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import PopupVideo from "../common/popup-video";

const DetailsThumbWrapper = ({
  imageURLs,
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
  videoId = false,
  status,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>

      <div className="tp-product-details-thumb-wrapper tp-tab flex gap-3 pr-0 top-0 relative md:sticky md:top-[100px] ">
        <nav className="absolute top-3 left-3 md:static">
          <div className="nav nav-tabs flex flex-col gap-2 md:gap-3">
            {imageURLs?.map((item, i) => (
              <button
                key={i}
                className={`nav-link relative w-[50px] h-[50px] lg:h-[100px] lg:w-[100px] aspect-square bg-white border hover:border-primary hover:bg-primary border-gray-200 rounded-md ${
                  item.img === activeImg ? "border-primary bg-primary" : ""
                }`}
                onClick={() => handleImageActive(item)}
              >
                <Image
                  src={item.img}
                  alt="image"
                  layout="fill"
                  className="aspect-square w-full h-full"
                />
              </button>
            ))}
          </div>
        </nav>
        <div className="tab-content m-img w-full">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb z-[-1] md:rounded-lg w-full overflow-hidden">
              <Image
                src={activeImg}
                alt="product img"
                layout="fill"
                className="w-full h-full aspect-square relative"
              />
              <div className="tp-product-badge">
                {status === "out-of-stock" && (
                  <span className="product-hot">Дууссан</span>
                )}
              </div>
              {videoId && (
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="tp-product-details-thumb-video"
                >
                  <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* modal popup start */}
      {videoId && (
        <PopupVideo
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={videoId}
        />
      )}
      {/* modal popup end */}
    </>
  );
};

export default DetailsThumbWrapper;
