import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";

export const metadata = {
  title: "Дэлгүүр",
};

export default function ShopPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Бүтээгдэхүүн хайх" subtitle="Дэлүүр" />
      <ShopArea/>
      {/* <Footer primary_style={true} /> */}
    </Wrapper>
  );
}
