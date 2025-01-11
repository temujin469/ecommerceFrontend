import Wrapper from "@/layout/wrapper";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import ProductDetailHeader from "@/layout/headers/productDetailHeader";

export const metadata = {
  title: "Бүтээгдэхүүн",
};

export default function ProductDetailsPage({ params }) {
  return (
    <Wrapper>
      <ProductDetailHeader/>
      <ProductDetailsArea id={params.id} />
    </Wrapper>
  );
}
