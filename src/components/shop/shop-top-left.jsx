import { GridTab, ListTab } from "@/svg";
import React from "react";

const ShopTopLeft = ({total,showing=9}) => {
  return (
    <>
      <div className="tp-shop-top-left d-flex align-items-center ">
        <div className="tp-shop-top-tab tp-tab">
          <ul className="nav nav-tabs" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active rounded-lg flex justify-center items-center"
                id="grid-tab"
                data-bs-toggle="tab"
                data-bs-target="#grid-tab-pane"
                type="button"
                role="tab"
                aria-controls="grid-tab-pane"
                aria-selected="true"
                tabIndex={-1}
              >
                <GridTab />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link  rounded-lg flex justify-center items-center"
                id="list-tab"
                data-bs-toggle="tab"
                data-bs-target="#list-tab-pane"
                type="button"
                role="tab"
                aria-controls="list-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                <ListTab />
              </button>
            </li>
          </ul>
        </div>
        <div className="tp-shop-top-result">
          {/* <p>{total} илэрцээс {showing}-ыг харуулж байна</p> */}
          <p>{total} илэрц</p>
        </div>
      </div>
    </>
  );
};

export default ShopTopLeft;
