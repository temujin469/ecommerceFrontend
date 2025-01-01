"use client";
import { useState } from "react";
// internal
import { Search } from "@/svg";
// import NiceSelect from "@/ui/nice-select";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";
import { Button } from "../ui/button";

const HeaderSearchForm = () => {
  const { setSearchText, setCategory, handleSubmit, searchText } =
    useSearchFormSubmit();

  // selectHandle
  const selectCategoryHandle = (e) => {
    setCategory(e.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-2 border-primary flex items-center p-1 rounded-full overflow-hidden">
        <div className="tp-header-search-box w-full">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Бүтээгдэхүүн хайх..."
          />
        </div>
        {/* <div className="tp-header-search-category">
          <NiceSelect
            options={[
              { value: "Select Category", text: "Select Category" },
              { value: "electronics", text: "electronics" },
              { value: "fashion", text: "fashion" },
              { value: "beauty", text: "beauty" },
              { value: "jewelry", text: "jewelry" },
            ]}
            defaultCurrent={0}
            onChange={selectCategoryHandle}
            name="Select Category"
          />
        </div> */}
        <Button type="submit" className="bg-primary w-[45px] h-[45px] rounded-full">
          <Search />
        </Button>
      </div>
    </form>
  );
};

export default HeaderSearchForm;
