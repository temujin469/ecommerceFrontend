"use client";
import React from "react";
import Image from "next/image";
// internal
import ins_1 from "@assets/img/instagram/instagram-1.jpg";
import ins_2 from "@assets/img/instagram/instagram-2.jpg";
import ins_3 from "@assets/img/instagram/instagram-3.jpg";
import ins_4 from "@assets/img/instagram/instagram-4.jpg";
import ins_5 from "@assets/img/instagram/instagram-5.jpg";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.instagram.com/", img: ins_1 },
  { id: 2, link: "https://www.instagram.com/", img: ins_2 },
  { id: 3, link: "https://www.instagram.com/", img: ins_3 },
  { id: 4, link: "https://www.instagram.com/", img: ins_4 },
  { id: 5, link: "https://www.instagram.com/", img: ins_5 },
];

const InstagramArea = () => {
  return (
    <div className="tp-instagram-area pb-10">
      <div className="container">
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-2">
          {instagram_data.map((item) => (
            <div key={item.id} className="col">
              <div className="tp-instagram-item p-relative z-index-1 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt="instagram img"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="tp-instagram-icon">
                  <a href={item.link} target="_blank" className="popup-image">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramArea;
