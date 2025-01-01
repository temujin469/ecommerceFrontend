"use client";
import React from "react";
import { feature_data } from "./feature-area-2";

const FeatureArea = () => {
  return (
    <section className="tp-feature-area tp-feature-border-radius pb-10">
      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          {feature_data.map((item, i) => (
            <div
              key={i}
              className="col-span-6 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6"
            >
              <div
                className="p-3 gap-3 md:py-10 px-6 aspect-square md:aspect-auto flex flex-col md:flex-row justify-center items-center rounded-lg"
                style={{
                  background: item.bg,
                }}
              >
                <div className="text-secondary bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center">
                  <span>{item.icon}</span>
                </div>
                <div className="text-center md:text-start">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-ellipsis whitespace-nowrap w-full overflow-hidden">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
