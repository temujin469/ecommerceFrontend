"use client";
import React, { useRef, useEffect } from "react";
import ReviewForm from "../forms/review-form";
import ReviewItem from "./review-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const DetailsTabNav = ({ product }) => {
  const { _id, description, additionalInformation, reviews } = product || {};
  const activeRef = useRef(null);
  const marker = useRef(null);
  // handleActive
  const handleActive = (e) => {
    if (e.target.classList.contains("active")) {
      marker.current.style.left = e.target.offsetLeft + "px";
      marker.current.style.width = e.target.offsetWidth + "px";
    }
  };
  useEffect(() => {
    if (activeRef.current?.classList.contains("active")) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, []);

  return (
    <>
      <div className="">
        <Tabs defaultValue="Мэдээлэл" className="max-w-[700px] mx-auto">
          <TabsList className="bg-[#aef78e]">
            <TabsTrigger value="Мэдээлэл">Мэдээлэл</TabsTrigger>
            <TabsTrigger value="Үнэлгээ">Үнэлгээ</TabsTrigger>
            <TabsTrigger value="Тайлбар">Тайлбар</TabsTrigger>
          </TabsList>
          <TabsContent
            className="border border-gray-200 rounded-lg p-3"
            value="Мэдээлэл"
          >
            {description}
          </TabsContent>
          <TabsContent
            className="border border-gray-200 rounded-lg p-3"
            value="Үнэлгээ"
          >
            {/* reviews */}
            <div className="tp-product-details-review-list pr-110">
              <h3 className="tp-product-details-review-title">Үнэлгээ</h3>
              {reviews.length === 0 && (
                <h3 className="tp-product-details-review-title">
                  Одоогоор үнэлгээ байхгүй байна.
                </h3>
              )}
              {reviews.length > 0 &&
                reviews.map((item) => (
                  <ReviewItem key={item._id} review={item} />
                ))}
            </div>
            <div>
              <div
                className="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
                tabIndex="-1"
              >
                <div className="tp-product-details-review-wrapper pt-60">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tp-product-details-review-statics">
                        {/* reviews */}
                        <div className="tp-product-details-review-list pr-110">
                          <h3 className="tp-product-details-review-title">
                            Үнэлгээ
                          </h3>
                          {reviews.length === 0 && (
                            <h3 className="tp-product-details-review-title">
                              Одоогоор үнэлгээ байхгүй байна.
                            </h3>
                          )}
                          {reviews.length > 0 &&
                            reviews.map((item) => (
                              <ReviewItem key={item._id} review={item} />
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="tp-product-details-review-form">
                        <h3 className="tp-product-details-review-form-title">
                          Үнэлгээ өгөх
                        </h3>
                        <p>Таны имэйл хаягийг нийтлэхгүй.</p>
                        {/* form start */}
                        <ReviewForm product_id={_id} />
                        {/* form end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            className="border border-gray-200 rounded-lg p-3"
            value="Тайлбар"
          >
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              {/* <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Method</TableHead>
                </TableRow>
              </TableHeader> */}
              <TableBody>
                {additionalInformation?.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.key}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default DetailsTabNav;
