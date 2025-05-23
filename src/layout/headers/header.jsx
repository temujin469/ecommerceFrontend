"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// internal
import Menus from "./header-com/menus";
import useSticky from "@/hooks/use-sticky";
import logo from "@assets/img/logo/logo2.png";
import useCartInfo from "@/hooks/use-cart-info";
import OffCanvas from "@/components/common/off-canvas";
import { openCartMini } from "@/redux/features/cartSlice";
import HeaderCategory from "./header-com/header-category";
import HeaderTopRight from "./header-com/header-top-right";
import HeaderMainRight from "./header-com/header-main-right";
import CartMiniSidebar from "@/components/common/cart-mini-sidebar";
import HeaderSearchForm from "@/components/forms/header-search-form";
import {
  CartTwo,
  CategoryMenu,
  Compare,
  Menu,
  Phone,
  ShippingCar,
  Wishlist,
} from "@/svg";

const Header = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();

  const [show, setShow] = useState(true); // To control the visibility of the div
  const [lastScroll, setLastScroll] = useState(0); // To store the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 0) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <>
      <header>
        <div className="tp-header-area p-relative z-index-11 shadow-sm">
          {/* header top start  */}
          <div className="tp-header-top bg-primary relative z-[1] hidden md:block py-1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-header-welcome d-flex align-items-center">
                    <span>
                      <ShippingCar />
                    </span>
                    <p className="text-black">Maнай дэлгүүр тавтай морил</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-header-top-right d-flex align-items-center justify-content-end">
                    {/* <HeaderTopRight /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* header main start */}
          <div className="tp-header-main tp-header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                  <div className="logo">
                    <Link href="/" className="flex gap-2 justify-center items-center font-bold text-primary text-3xl">
                      <Image src={logo} alt="logo" width={50} height={50} />
                      Attila
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                  <div className="tp-header-search pl-70">
                    <HeaderSearchForm />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-8 col-6">
                  <HeaderMainRight setIsCanvasOpen={setIsCanvasOpen} />
                </div>
              </div>
            </div>
          </div>

          {/* header bottom start */}
          <div className="tp-header-bottom tp-header-bottom-border hidden lg:block ">
            <div className="container">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3">
                    {/* category start */}
                    <div className="tp-header-category tp-category-menu tp-header-category-toggle">
                      <button
                        onClick={() => setIsCategoryActive(!isCategoryActive)}
                        className="tp-category-menu-btn tp-category-menu-toggle flex items-center font-semibold"
                      >
                        <span>
                          <CategoryMenu />
                        </span>
                        Бүх ангилал
                      </button>
                      <nav className="tp-category-menu-content">
                        <HeaderCategory
                          categoryType=""
                          isCategoryActive={isCategoryActive}
                        />
                      </nav>
                    </div>
                    {/* category end */}
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="main-menu menu-style-1">
                      <nav className="tp-main-menu-content">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3">
                    {/* <div className="tp-header-contact d-flex align-items-center justify-content-end">
                      <div className="tp-header-contact-icon">
                        <span>
                          <Phone />
                        </span>
                      </div>
                      <div className="tp-header-contact-content">
                        <h5>Hotline:</h5>
                        <p>
                          <a href="tel:402-763-282-46">+(402) 763 282 46</a>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* sticky header start */}
      <div
        id="header-sticky-2"
        className={`tp-header-sticky-area overflow-hidden ${
          sticky ? "header-sticky-2" : ""
        }`}
      >
        <div className="container overflow-hidden">
          <div className="tp-mega-menu-wrapper relative">
            <div className="flex justify-between items-center">
              <div className="logo">
              <Link href="/" className="flex gap-2 justify-center items-center font-bold text-primary text-3xl">
                      <Image src={logo} alt="logo" width={40} height={40} />
                      Attila
                    </Link>
              </div>
              <div className="tp-header-sticky-menu main-menu menu-style-1 d-none d-lg-block">
                <nav id="mobile-menu">
                  <Menus />
                </nav>
              </div>
              <div className="tp-header-action d-flex align-items-center justify-content-end ml-50">
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
                    type="button"
                    className="tp-header-action-btn cartmini-open-btn"
                  >
                    <CartTwo />
                    <span className="tp-header-action-badge">{quantity}</span>
                  </button>
                </div>
                <div className="tp-header-action-item d-lg-none">
                  <button
                    onClick={() => setIsCanvasOpen(true)}
                    type="button"
                    className="tp-header-action-btn tp-offcanvas-open-btn"
                  >
                    <Menu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sticky header end */}

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsCanvasOpen={setIsCanvasOpen}
        categoryType="electronics"
      />
      {/* off canvas end */}
    </>
  );
};

export default Header;
