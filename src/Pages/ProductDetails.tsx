import { ImageSlider } from "./ImageCarousel";
import "./ProductDetails.css";
import { ProductDetailsInfoContent } from "./ProductDetailsInfoContent";
import "./ProductDetailsResponsive.css";

export const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="product-details-image-container">
        <ImageSlider />
      </div>
      <div className="product-details-info-container">
        <ProductDetailsInfoContent />
      </div>
    </div>
  );
};
