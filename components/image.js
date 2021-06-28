import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const ImageComponent = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
      layout="fill"
    />
  );
};

export default ImageComponent;
