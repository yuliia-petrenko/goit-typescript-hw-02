import { Image } from "../App/App.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  picture: Image;
  handleOpen: (url: string, alt: string) => void;
}

const ImageCard = ({ picture, handleOpen }: ImageCardProps) => {
  return (
    <div className={css.imageCard}
      onClick={() => handleOpen(picture.urls.regular, picture.alt_description)}
    >
      <img className={css.image} src={picture.urls.small} alt={picture.alt_description}/>
    </div>
  );
};

export default ImageCard;
