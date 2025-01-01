import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const ResetButton = ({ shop_right = false,setPriceValues,maxPrice }) => {
  const router = useRouter();

  const handleReset = () => {
    setPriceValues([0, maxPrice]);
    router.push(`/${shop_right ? "shop-right-sidebar" : "shop"}`);
  };
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Тохиргоо</h3>
      <Button
        onClick={handleReset}
        className="bg-primary h-[50px] w-full"
      >
       Дахин тохируулах
      </Button>
    </div>
  );
};

export default ResetButton;
