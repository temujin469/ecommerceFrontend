import React from "react";
import Image from "next/image";
// internal
import { AnimatedLine } from "@/svg";
import shape_1 from "@assets/img/subscribe/subscribe-shape-1.png";
import shape_2 from "@assets/img/subscribe/subscribe-shape-2.png";
import shape_3 from "@assets/img/subscribe/subscribe-shape-3.png";
import shape_4 from "@assets/img/subscribe/subscribe-shape-4.png";
import plane from "@assets/img/subscribe/plane.png";

function Shape({ img, num }) {
  return (
    <Image className={`tp-subscribe-shape-${num}`} src={img} alt="shape" />
  );
}

const CtaArea = () => {
  return (
    <section className="tp-subscribe-area pt-70 pb-65 theme-bg p-relative z-index-1">
      <div className="tp-subscribe-shape">
        <Shape img={shape_1} num="1" />
        <Shape img={shape_2} num="2" />
        <Shape img={shape_3} num="3" />
        <Shape img={shape_4} num="4" />
        <div className="tp-subscribe-plane">
          <Image className="tp-subscribe-plane-shape" src={plane} alt="img" />
          <AnimatedLine />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="tp-subscribe-content">
              <h3 className="text-2xl font-semibold text-black">
                Хямдралын мэдээлэл цаг алдалүй аваарай
              </h3>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="tp-subscribe-form">
              <form action="#">
                <div className="flex">
                  <input type="email" className="rounded-l-lg outline-none border-none" placeholder="Имэйл хаягаа оруулна уу" />
                  <button className="bg-black rounded-r-lg text-white px-3" type="submit">Бүртгүүлэх</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaArea;
