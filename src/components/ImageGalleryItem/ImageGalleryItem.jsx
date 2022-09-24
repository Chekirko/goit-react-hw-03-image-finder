import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, name, largeImg, onClick }) => {
  return (
    <GalleryItem onClick={() => onClick(largeImg)}>
      <GalleryImg src={image} alt={name} />
    </GalleryItem>
  );
};
