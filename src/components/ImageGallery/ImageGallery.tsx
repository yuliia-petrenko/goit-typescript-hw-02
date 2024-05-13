import { Image } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  handleOpen: (url: string, alt: string) => void;
}

const ImageGallery = ({ images, handleOpen }: ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {images !== null &&
        Array.isArray(images) &&
        images.map((image: Image) => (
          <li key={image.id}>
            <ImageCard picture={image} handleOpen={handleOpen} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
