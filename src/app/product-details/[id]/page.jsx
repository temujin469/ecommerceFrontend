import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ProductDetailsArea from "@/components/product-details/product-details-area";

export const metadata = {
  title: "Бүтээгдэхүүн",
};

export default function ProductDetailsPage({ params }) {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea id={params.id} />
    </Wrapper>
  );
}
