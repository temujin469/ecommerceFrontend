"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// internal
import Menus from "./header-com/menus";
import logo from "@assets/img/logo/logo2.png";
import useSticky from "@/hooks/use-sticky";
import useCartInfo from "@/hooks/use-cart-info";
import { openCartMini } from "@/redux/features/cartSlice";
import HeaderTopRight from "./header-com/header-top-right";
import CartMiniSidebar from "@/components/common/cart-mini-sidebar";
import {
  CartTwo,
  Compare,
  Facebook,
  Menu,
  PhoneTwo,
  Wishlist,
  Search,
} from "@/svg";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";
import OffCanvas from "@/components/common/off-canvas";

const HeaderTwo = ({ style_2 = false }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { setSearchText, handleSubmit, searchText } = useSearchFormSubmit();
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div
          className={`tp-header-area tp-header-style-${
            style_2 ? "primary" : "darkRed"
          } tp-header-height`}
        >
          {/* <div className="tp-header-top-2 p-relative z-index-11 tp-header-top-border d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-header-info d-flex align-items-center">
                    <div className="tp-header-info-item">
                      <a href="#">
                        <span>
                          <Facebook />
                        </span> 7500k Followers
                      </a>
                    </div>
                    <div className="tp-header-info-item">
                      <a href="tel:402-763-282-46">
                        <span>
                          <PhoneTwo />
                        </span> +(402) 763 282 46
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-header-top-right tp-header-top-black d-flex align-items-center justify-content-end">
                    <HeaderTopRight />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div
            id="header-sticky"
            className={`tp-header-bottom-2 tp-header-sticky ${
              sticky ? "header-sticky" : "bg-transparent"
            }`}
          >
            <div className="container">
              <div className="tp-mega-menu-wrapper relative">
                <div className="flex items-center justify-between">
                  <div className="logo">
                  <Link href="/" className="flex gap-2 justify-center items-center font-bold text-primary text-3xl">
                      <Image src={logo} alt="logo" width={40} height={40} />
                      Attila
                    </Link>
                  </div>
                  <div className="d-none d-xl-block">
                    <div className="main-menu menu-style-2">
                      <nav className="tp-main-menu-content">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="tp-header-bottom-right flex items-center justify-between">
                    <div className="tp-header-search-2 d-none d-sm-block">
                      <form onSubmit={handleSubmit}>
                        <input
                          onChange={(e) => setSearchText(e.target.value)}
                          value={searchText}
                          type="text"
                          placeholder="Бүтээгдэхүүн хайх..."
                        />
                        <button type="submit">
                          <Search />
                        </button>
                      </form>
                    </div>
                    <div className="tp-header-action flex items-center justify-between ml-10">
                      <div className="tp-header-action-item d-none d-lg-block">
                        <Link href="/compare" className="tp-header-action-btn">
                          <Compare />
                        </Link>
                      </div>
                      <div className="tp-header-action-item d-none d-lg-block">
                        <Link href="/wishlist" className="tp-header-action-btn">
                          <Wishlist />
                          <span className="tp-header-action-badge">
                            {wishlist.length}
                          </span>
                        </Link>
                      </div>
                      <div className="tp-header-action-item">
                        <button
                          onClick={() => dispatch(openCartMini())}
                          className="tp-header-action-btn cartmini-open-btn"
                        >
                          <CartTwo />
                          <span className="tp-header-action-badge">
                            {quantity}
                          </span>
                        </button>
                      </div>
                      <div className="tp-header-action-item tp-header-hamburger d-xl-none">
                        <button
                          onClick={() => setIsCanvasOpen(true)}
                          type="button"
                          className="tp-offcanvas-open-btn"
                        >
                          <Menu />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsCanvasOpen={setIsCanvasOpen}
        categoryType="fashion"
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;
