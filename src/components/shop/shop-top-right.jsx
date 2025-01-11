import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import { handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ShopTopRight = ({ selectHandleFilter }) => {
  const dispatch = useDispatch();
  return (
    <div className="pt-5 flex items-center justify-between gap-3">
      <div className="w-full">
        <Select onOpenChange={selectHandleFilter} defaultCurrent={0}>
          <SelectTrigger className="min-w-[130px] h-[50px] outline-none">
            <SelectValue placeholder="Эрэмблэх" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="efault Sorting">Үндсэн эрэмбэлэлт</SelectItem>
            <SelectItem value="Low to High">Үнэ багаас их</SelectItem>
            <SelectItem value="High to Low">Үнэ ихээс бага</SelectItem>
            <SelectItem value="New Added">Шинээр нэмэгдсэн</SelectItem>
            <SelectItem value="On Sale">Хямдралтай</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" w-full">
        <Button
          onClick={() => dispatch(handleFilterSidebarOpen())}
          type="button"
          className=" h-[50px] w-100 bg-primary"
        >
          <span>
            <Filter />
          </span>{" "}
          Шүүлтүүр
        </Button>
      </div>
    </div>
  );
};

export default ShopTopRight;
