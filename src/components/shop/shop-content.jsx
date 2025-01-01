'use client'
import React,{ useState} from 'react';
import Pagination from "@/ui/Pagination";
import CategoryFilter from "./shop-filter/category-filter";
import ColorFilter from "./shop-filter/color-filter";
import PriceFilter from "./shop-filter/price-filter";
import ProductBrand from "./shop-filter/product-brand";
import StatusFilter from "./shop-filter/status-filter";
import TopRatedProducts from "./shop-filter/top-rated-products";
import ShopListItem from "./shop-list-item";
import ShopTopLeft from "./shop-top-left";
import ShopTopRight from "./shop-top-right";
import ResetButton from "./shop-filter/reset-button";
import ProductItem from '../products/electronics/product-item';

const ShopContent = ({all_products,products,otherProps,shop_right,hidden_sidebar}) => {
  const {priceFilterValues,selectHandleFilter,currPage,setCurrPage} = otherProps;
  const {setPriceValue} = priceFilterValues || {};
  const [filteredRows, setFilteredRows] = useState(products);
  const [pageStart, setPageStart] = useState(0);
  const [countOfPage, setCountOfPage] = useState(12);

  const paginatedData = (items, startPage, pageCount) => {
    setFilteredRows(items);
    setPageStart(startPage);
    setCountOfPage(pageCount);
  };

  // max price
  const maxPrice = all_products.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return (
    <>
     <section className="tp-shop-area pb-20">
        <div className="container">
          <div className="row">
            {!shop_right && !hidden_sidebar && (
              <div className="col-xl-3 col-lg-4">
                <div className="tp-shop-sidebar mr-10">
                  {/* filter */}
                  <PriceFilter
                    priceFilterValues={priceFilterValues}
                    maxPrice={maxPrice}
                  />
                  {/* status */}
                  <StatusFilter setCurrPage={setCurrPage} />
                  {/* categories */}
                  <CategoryFilter setCurrPage={setCurrPage} />
                  {/* color */}
                  <ColorFilter setCurrPage={setCurrPage} />
                  {/* product rating */}
                  <TopRatedProducts />
                  {/* brand */}
                  <ProductBrand setCurrPage={setCurrPage} />
                  {/* reset filter */}
                  <ResetButton setPriceValues={setPriceValue} maxPrice={maxPrice} />
                </div>
              </div>
            )}

            <div className={`${hidden_sidebar ? 'col-xl-12 col-lg-12' : 'col-xl-9 col-lg-8'}`}>
              <div className="tp-shop-main-wrapper">
                <div className="tp-shop-top mb-5">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 xl:col-span-6">
                      <ShopTopLeft
                        showing={
                          products.length === 0
                            ? 0
                            : filteredRows.slice(
                                pageStart,
                                pageStart + countOfPage
                              ).length
                        }
                        total={all_products.length}
                      />
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <ShopTopRight selectHandleFilter={selectHandleFilter} />
                    </div>
                  </div>
                </div>
                {products.length === 0 && <h2>Бүтээгдэхүүн олдсонгүй!</h2>}
                {products.length > 0 && (
                  <div className="tp-shop-items-wrapper tp-shop-item-primary">
                    <div className="tab-content" id="productTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="grid-tab-pane"
                        role="tabpanel"
                        aria-labelledby="grid-tab"
                        tabIndex="0"
                      >
                        <div className="grid grid-cols-12 gap-3">
                          {filteredRows
                            .slice(pageStart, pageStart + countOfPage)
                            .map((item,i) => (
                              <div
                                key={i}
                                className="col-span-6 xl:col-span-3 md:col-span-3 sm:col-span-6"
                              >
                                <ProductItem product={item} />
                              </div>
                            ))}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="list-tab-pane"
                        role="tabpanel"
                        aria-labelledby="list-tab"
                        tabIndex="0"
                      >
                        <div className="tp-shop-list-wrapper tp-shop-item-primary mb-70">
                          <div className="row">
                            <div className="col-xl-12">
                              {filteredRows
                                .slice(pageStart, pageStart + countOfPage)
                                .map((item,i) => (
                                  <ShopListItem key={i} product={item} />
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {products.length > 0 && (
                  <div className="tp-shop-pagination mt-10">
                    <div className="tp-pagination d-flex justify-content-center">
                      <Pagination
                        items={products}
                        countOfPage={12}
                        paginatedData={paginatedData}
                        currPage={currPage}
                        setCurrPage={setCurrPage}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {shop_right && (
              <div className="col-xl-3 col-lg-4">
                <div className="tp-shop-sidebar mr-10">
                  {/* filter */}
                  <PriceFilter
                    priceFilterValues={priceFilterValues}
                    maxPrice={maxPrice}
                  />
                  {/* status */}
                  <StatusFilter setCurrPage={setCurrPage} />
                  {/* categories */}
                  <CategoryFilter setCurrPage={setCurrPage} />
                  {/* color */}
                  <ColorFilter setCurrPage={setCurrPage} />
                  {/* product rating */}
                  <TopRatedProducts />
                  {/* brand */}
                  <ProductBrand setCurrPage={setCurrPage} />
                  {/* reset filter */}
                  <ResetButton setPriceValues={setPriceValue} maxPrice={maxPrice} />
                </div>
             </div>
            )}
          </div>
        </div>
      </section> 
    </>
  );
};

export default ShopContent;