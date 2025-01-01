"use client";
import React, { useEffect, useState } from "react";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { ShapeLine, TabLine } from "@/svg";
import ProductItem from "./product-item";
import ErrorMsg from "@/components/common/error-msg";
import HomePrdLoader from "@/components/loader/home/home-prd-loader";

const tabs = [
  { label: "Шинэ", query: "new" },
  { label: "Онцлох", query: "featured" },
  { label: "Топ", query: "topSellers" },
];

const ProductArea = () => {
  const [activeTab, setActiveTab] = useState("new");
  const {
    data: products,
    isError,
    isLoading,
    refetch,
  } = useGetProductTypeQuery({
    type: "electronics",
    query: `${activeTab}=true`,
  });
  // handleActiveTab
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  // refetch when active value change
  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomePrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="Бүтээгдэхүүн олдсонгүй!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    content = product_items.map((prd, i) => (
      <div key={i} className="col-span-1">
        <ProductItem product={prd} />
      </div>
    ));
  }
  return (
    <section className="tp-product-area pb-10">
      <div className="container">
        <div className="flex justify-between mb-5">
          <div className="hidden md:block">
            <h3 className="text-3xl text-gray-600 font-medium">
              Тренд бүтээгдэхүүн
              <div className=" text-primary">
                <ShapeLine />
              </div>
            </h3>
          </div>
          <div className="md:max-w-[400px] w-full">
            <ul className="flex flex-row gap-3 w-full ">
              {tabs.map((tab, i) => (
                <li key={i} className="w-full flex-1">
                  <button
                    onClick={() => handleActiveTab(tab.query)}
                    className={`px-4 w-full hover:bg-primary hover:text-white py-3 rounded-full uppercase ${
                      activeTab === tab.query ? "bg-primary text-white" : ""
                    }`}
                  >
                    {tab.label.split("-").join(" ")}
                    <span className="tp-product-tab-line">
                      <TabLine />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="product-grid">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
