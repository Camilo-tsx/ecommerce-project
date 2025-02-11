import { products } from "../Products/ProductList";
import "./ImageCarousel.css";
import { useRef } from "react";
import { useGetParams } from "../components/SearchParamsCustomHook/useParams";

export const ImageSlider = () => {
  const { id } = useGetParams();

  const product = products.find(p => p.id === id);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const scrollToImage = (index: number) => {
    const imageElement = imageRefs.current[index];
    if (imageElement) {
      const carouselContainer = imageElement.closest(".carousel-container");
      if (carouselContainer) {
        carouselContainer.scrollTo({
          top: imageElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="thumbnail-container">
        {product.src.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Miniatura ${index + 1}`}
            className="thumbnail-image"
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>
      <div className="carousel-container">
        {product.src.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="carousel-image"
            ref={el => (imageRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};
